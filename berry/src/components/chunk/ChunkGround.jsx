import { CHUNK_SIZE } from "../../constants/world";

export default function ChunkGround() {
    return (
        <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            receiveShadow
        >
            <planeGeometry args={[CHUNK_SIZE, CHUNK_SIZE]} />

            <meshStandardMaterial
                color="#6AA84F"
            />
        </mesh>
    );
}