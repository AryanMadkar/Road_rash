import { CHUNK_SIZE,ROAD_WIDTH } from "../../constants/world";

export default function Road() {
    return (
        <mesh
            position={[0, 0.01, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            receiveShadow
        >
            <planeGeometry
                args={[CHUNK_SIZE, ROAD_WIDTH]}
            />

            <meshStandardMaterial
                color="#3f3f3f"
            />
        </mesh>
    );
}