import { Canvas } from '@react-three/fiber'
import Model from './Model.jsx'

export default function ModelSection() {
    return (

        <div style={styles.wrapper}>
            <Canvas
                orthographic
                camera={{
                    position: [0, 5, 10],
                    zoom: 300,
                    near: -100,
                    far: 100,
                }}
            >
                <ambientLight intensity={0.6} />
                <directionalLight
                    position={[0, 10, 0]}
                    intensity={0.8}
                />
                <directionalLight
                    position={[0, 0, 10]}
                    intensity={0.3}
                />
                <Model />
            </Canvas>
        </div>

    )
}

const styles = {
    wrapper: {
        position: 'absolute',
        width: '500px',
        height: '400px',
        margin: '20',
    },
}
