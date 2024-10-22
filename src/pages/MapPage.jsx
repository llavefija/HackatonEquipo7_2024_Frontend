import { useMemo, useState } from "react";
import HeatMap from "../components/HeatMap"
import MapFormComponent from "../components/MapFormComponent"
// import { GET_MAP_DATA } from "../api/apiUrls";
import useFetch from "../hooks/useFetch";
import { getCurrentDateTime } from "../utils/getCurrentDateTime";


const MapPage = () => {
    const currentDate = getCurrentDateTime();
    const [dateTime, setDateTime] = useState(currentDate);

    const fetchOptions = useMemo(() => ({
        headers: {
            "Content-Type": "application/json",
        },
        method: "GET",
    }), []);

    const { data, loading, error } = useFetch("/src/api/pointsCoords.geojson", fetchOptions);
    console.log("Data:", data)

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="relative top-0 left-0 right-0 bottom-0 h-full">
            <HeatMap data={data} />
            <MapFormComponent dateTime={dateTime} setDateTime={setDateTime} />

        </div>
    )
}
export default MapPage