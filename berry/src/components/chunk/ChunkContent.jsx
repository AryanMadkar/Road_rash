import Road from "../road/Road";
import Lot from "../buildings/Lot";
import { generateLots } from "../../utils/lotGenerator";
export default function ChunkContent({
    data,
}) {
    const lots = generateLots(data);
    return (
        <>
            <Road
                type={data.road.type}
                direction={data.road.direction}
            />
            {lots.map((lot) => (
                <Lot
                    key={lot.id}
                    position={lot.position}
                    size={lot.size}
                />
            ))}
        </>
    );
}