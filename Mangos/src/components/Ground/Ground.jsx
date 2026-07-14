import GroundPlane from "./GroundPlane";
import Road from "./Road";
import LaneLines from "./LaneLines";
import RoadEdges from "./RoadEdges";
import RoadPosts from "./RoadPosts";
import Sidewalks from "./Sidewalks";
import Buildings from "./Buildings";

export default function Ground() {
    return (
        <>
            <GroundPlane />

            <Road />

            <RoadEdges />

            <LaneLines />

            <RoadPosts />
            <Sidewalks />
            <Buildings />
        </>
    );
}