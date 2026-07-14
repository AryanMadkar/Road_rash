import Road from "../road/Road";
import { generateLots } from "../../utils/lotGenerator";
import CityObjects from './../city/CityObject';
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
            <CityObjects lots={lots} />
        </>
    );
}