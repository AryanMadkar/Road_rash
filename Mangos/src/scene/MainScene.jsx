import Ground from "../components/Ground/Ground";
import { Model as CarModel } from "../assets/models/phonix";
import { useFrame } from "@react-three/fiber";
import useKeyboard from "../hooks/useKeyboard";
import { entityManager } from "../entities/EntityManager";

export default function MainScene() {
    const keys = useKeyboard();

    useFrame((state, delta) => {
        entityManager.update(delta, keys.current);
    });

    return (
        <>
            {/* Sky + ground fill — cheap, covers all angles */}
            <hemisphereLight skyColor="#87ceeb" groundColor="#c8d8a0" intensity={1.5} />

            {/* Ambient — prevents pitch-black undersides */}
            <ambientLight intensity={1.5} />

            {/* Main sun — single shadow-casting light (only one should cast shadows) */}
            <directionalLight
                position={[8, 12, 8]}
                intensity={4}
                castShadow
                shadow-mapSize={[1024, 1024]}
                shadow-camera-near={0.5}
                shadow-camera-far={80}
                shadow-camera-left={-15}
                shadow-camera-right={15}
                shadow-camera-top={15}
                shadow-camera-bottom={-15}
            />

            <Ground receiveShadow />            
            <CarModel
                position={[0, 0, 0]}
                scale={1.5}
                castShadow
                receiveShadow
            />
        </>
    );
}
