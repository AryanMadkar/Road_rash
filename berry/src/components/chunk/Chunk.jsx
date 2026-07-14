import { CHUNK_SIZE } from "../../constants/world";
import ChunkGround from "./ChunkGround";
import ChunkContent from "./ChunkContent";
import { generateChunk } from "../../utils/chunkGenerator";
export default function Chunk({
    chunkX,
    chunkZ,
    position,
}) {
    const data = generateChunk(chunkX, chunkZ);
    return (
        <group style={{ position: 'absolute' }} position={position}>
            {/* Ground */}
            <ChunkGround />
            <ChunkContent data={data} />
        </group>
    );
}