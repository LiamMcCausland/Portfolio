import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const container = document.getElementById('three-bg');

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x44444E);

// Camera
const camera = new THREE.PerspectiveCamera(
    60,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
);
camera.position.set(0, 1, 5);

// Renderer
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

// Lighting
const ambient = new THREE.AmbientLight(0xffffff, 5);
scene.add(ambient);

// Model reference
let model;

// Spin variables
const clock = new THREE.Clock();
let baseSpinSpeed = 0.5;   // radians per second
let scrollBoost = 0;
let lastScrollY = window.scrollY;

// Scroll listener (controls spin boost)
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollVelocity = currentScrollY - lastScrollY;
    lastScrollY = currentScrollY;

    scrollBoost = THREE.MathUtils.clamp(scrollVelocity * 0.01, -3, 3);
});

// Load GLTF
const loader = new GLTFLoader();
loader.load(
    'assets/silent_ash/scene.gltf',
    (gltf) => {
        model = gltf.scene;

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        model.position.sub(center);
        const maxAxis = Math.max(size.x, size.y, size.z);
        model.scale.setScalar(4 / maxAxis);

        scene.add(model);
    },
    undefined,
    (error) => console.error('GLTF error:', error)
);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    if (model) {
        const delta = clock.getDelta();

        // Smooth decay of scroll boost
        scrollBoost *= 0.9;

        const spinSpeed = baseSpinSpeed + scrollBoost;
        model.rotation.y += spinSpeed * delta;
    }

    renderer.render(scene, camera);
}
animate();

// Resize handling
window.addEventListener('resize', () => {
    const width = container.clientWidth;
    const height = container.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
});
