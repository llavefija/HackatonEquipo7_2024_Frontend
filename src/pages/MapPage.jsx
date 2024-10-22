import { useState } from "react";
import HeatMap from "../components/HeatMap"
import MapFormComponent from "../components/MapFormComponent"

const MapPage = () => {
    const [dateTime, setDateTime] = useState("2018-07-22T10:00");

    return (
        <div className="relative top-0 left-0 right-0 bottom-0 h-[80vh]">
            <HeatMap />
            <MapFormComponent dateTime={dateTime} setDateTime={setDateTime} />

        </div>
    )
}
export default MapPage