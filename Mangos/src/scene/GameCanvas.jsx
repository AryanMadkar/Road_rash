import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MainScene from "./MainScene";
import * as THREE from "three";

export default function GameCanvas() {
    return (
        <Canvas
            shadows={{ type: THREE.PCFSoftShadowMap }}
            gl={{
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 1.4,
                powerPreference: "high-performance",
            }}
            dpr={[1, 2]}
            camera={{
                position: [5, 3, 8],
                fov: 50,
                near: 0.1,
                far: 200,
            }}
            style={{ background: '#87ceeb' }}
        >
            <MainScene />
            <OrbitControls
                makeDefault
                minDistance={3}
                maxDistance={50}
                maxPolarAngle={Math.PI / 2 - 0.01}
            />
        </Canvas>
    );
}
