import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const container = document.getElementById('three-bg');

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x44444E); // dark background for profile pic

// Camera
const camera = new THREE.PerspectiveCamera(
    60,
    container.clientWidth / container.clientHeight, // use div aspect ratio
    0.1,
    1000
);
camera.position.set(0, 1, 5); // position to fit small div

// Renderer
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);


const ambient = new THREE.AmbientLight(0xffffff, 5); // white, full intensity
scene.add(ambient);


// Model reference
let model;

// Scroll-based rotation variables
let targetRotation = 0;
let currentRotation = 0;

// Listen to scroll events
window.addEventListener('scroll', () => {
    // Map scroll position to rotation
    targetRotation = window.scrollY * 0.002; // adjust 0.002 for sensitivity
});

// Load GLTF
const loader = new GLTFLoader();
loader.load(
    'assets/silent_ash/scene.gltf',
    (gltf) => {
        model = gltf.scene;

        // Auto-scale and center for profile pic
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        model.position.sub(center); // center model
        const maxAxis = Math.max(size.x, size.y, size.z);
        model.scale.setScalar(4 / maxAxis); // scale to fit small div

        scene.add(model);

        console.log('Model loaded successfully');
    },
    undefined,
    (error) => console.error('GLTF error:', error)
);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    if (model) {
        // Smoothly interpolate rotation toward scroll target
        currentRotation += (targetRotation - currentRotation) * 0.1;

        // Optional: add subtle automatic rotation
        currentRotation += 0.001;

        model.rotation.y = currentRotation;
    }

    renderer.render(scene, camera);
}
animate();

// Resize handling for responsiveness
window.addEventListener('resize', () => {
    const width = container.clientWidth;
    const height = container.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
});
