import BuildingSmall from "./BuildingSmall";
import BuildingMedium from "./BuildingMedium";
import BuildingLarge from "./BuildingLarge";

export default function Building({ lot }) {
    const { position, size } = lot;

    const [width] = size;

    if (width <= 20) {
        return (
            <BuildingSmall
                position={position}
            />
        );
    }

    if (width <= 28) {
        return (
            <BuildingMedium
                position={position}
            />
        );
    }

    return (
        <BuildingLarge
            position={position}
        />
    );
}