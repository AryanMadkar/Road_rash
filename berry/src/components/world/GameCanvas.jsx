import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import World from "./World"
export default function GameCanvas() {
    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            gl={{
                antialias: false,
                powerPreference: "high-performance",
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 1.2,
            }}
            camera={{
                position: [75, 60, 75],
                fov: 45,
                near: 0.1,
                far: 2000,
            }}
            style={{ background: "#87ceeb" }}
        >
            <ambientLight intensity={2} />

            <directionalLight
                position={[100, 150, 100]}
                intensity={2.5}
                castShadow
                shadow-mapSize={[2048, 2048]}
            />

            <World />

            <OrbitControls
                makeDefault
                target={[0, 0, 0]}
                minDistance={20}
                maxDistance={300}
            />
        </Canvas>
    );
}