import BuildingMedium2001 from "../../assets/city/BuildingMedium2001";

export default function BuildingMedium({
    position,
    rotation = [0, 0, 0],
}) {
    return (
        <BuildingMedium2001
            position={position}
            rotation={rotation}
            castShadow
            receiveShadow
        />
    );
}