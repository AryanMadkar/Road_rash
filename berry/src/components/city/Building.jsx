import BuildingSmall from "./BuildingSmall";
import BuildingMedium from "./BuildingMedium";
import BuildingLarge from "./BuildingLarge";

export default function Building({ lot }) {
    const { position, size, rotation = [0, 0, 0] } = lot;

    const [width] = size;

    if (width <= 20) {
        return (
            <BuildingSmall
                position={position}
                rotation={rotation}
            />
        );
    }

    if (width <= 28) {
        return (
            <BuildingMedium
                position={position}
                rotation={rotation}
            />
        );
    }

    return (
        <BuildingLarge
            position={position}
            rotation={rotation}
        />
    );
}