import Building from "./Building";

export default function CityObjects({ lots }) {
    return (
        <>
            {lots.map((lot, index) => (
                <Building
                    key={index}
                    lot={lot}
                />
            ))}
        </>
    );
}