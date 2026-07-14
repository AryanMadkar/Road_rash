export function generateChunk(chunkX, chunkZ) {
    return {
        x: chunkX,
        z: chunkZ,

        road: {
            type: "straight",
            direction: "horizontal",
        },

        buildings: [],

        decorations: [],
    };
}