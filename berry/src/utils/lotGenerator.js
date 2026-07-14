// Simple deterministic pseudo-random based on chunk coords + lot index
function seededRand(x, z, i) {
    let s = Math.sin(x * 127.1 + z * 311.7 + i * 74.3) * 43758.5453;
    return s - Math.floor(s);
}

// Returns a size that maps to one of: small (≤20), medium (21-28), large (>28)
function pickSize(r) {
    if (r < 0.33) return 18;   // small
    if (r < 0.66) return 24;   // medium
    return 32;                  // large
}

export function generateLots(chunkData) {
    const cx = chunkData?.x ?? 0;
    const cz = chunkData?.z ?? 0;

    const lots = [
        { id: "A", position: [-30, 0, -30] },
        { id: "B", position: [30,  0, -30] },
        { id: "C", position: [-30, 0,  30] },
        { id: "D", position: [30,  0,  30] },
    ];

    return lots.map((lot, i) => {
        const sizeVal = pickSize(seededRand(cx, cz, i));
        // Swap signs so they face towards the road rather than away from it:
        // North side (z < 0) faces South (+Z): +Math.PI / 2
        // South side (z > 0) faces North (-Z): -Math.PI / 1
        const rotY = lot.position[2] < 0 ? 0  : -Math.PI / 1;
        return {
            ...lot,
            size: [sizeVal, sizeVal],
            rotation: [0, rotY, 0],
        };
    });
}