import Chunk from "./Chunk";
import { CHUNK_SIZE, RENDER_DISTANCE } from "../../constants/world";

export default function ChunkManager() {
    const chunks = [];

    for (let x = -RENDER_DISTANCE; x <= RENDER_DISTANCE; x++) {
        for (let z = -RENDER_DISTANCE; z <= RENDER_DISTANCE; z++) {
            chunks.push(
                <Chunk
                    key={`${x}-${z}`}
                    chunkX={x}
                    chunkZ={z}
                    position={[
                        x * CHUNK_SIZE,
                        0,
                        z * CHUNK_SIZE,
                    ]}
                />
            );
        }
    }

    return <>{chunks}</>;
}