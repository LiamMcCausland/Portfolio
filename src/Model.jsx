import { useRef, useLayoutEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

export default function Model() {
  const group = useRef()
  const { scene } = useGLTF('src/assets/computer/scene.gltf')

  // Center the model
  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    scene.position.x -= center.x
    scene.position.y -= center.y
    scene.position.z -= center.z
  }, [scene])

  // Slow auto spin (optional)
  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.25
  })

  return (
    <group ref={group}>
      <primitive object={scene} scale={0.45} />
      
      {/* Interactive Controls */}
      <OrbitControls
        enablePan={true}          // allow moving camera
        enableZoom={true}         // allow zooming
        enableRotate={true}       // allow rotation
        zoomSpeed={0.8}
        rotateSpeed={0.5}
        panSpeed={0.5}
        maxPolarAngle={Math.PI / 2} // limit vertical rotation
        minPolarAngle={0}
      />
    </group>
  )
}
