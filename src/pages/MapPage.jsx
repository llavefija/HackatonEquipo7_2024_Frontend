import { useState, useEffect } from "react";
import HeatMap from "../components/HeatMap";
import MapFormComponent from "../components/MapFormComponent";
import { getCurrentDateTime } from "../utils/getCurrentDateTime";
import { formatDateTime } from "../utils/formateDateTime";
import useMapData from "../hooks/useMapData";

const MapPage = () => {
    const currentDate = getCurrentDateTime();
    const [dateTime, setDateTime] = useState(currentDate);

    const { data, loading, error, fetchData } = useMapData();
    const { date, hour } = formatDateTime(dateTime);

    useEffect(() => {
        fetchData(date, hour);
    }, []);

    const handleSubmit = () => {
        const { date, hour } = formatDateTime(dateTime);
        fetchData(date, hour);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="relative top-0 left-0 right-0 bottom-0 h-full">
            <HeatMap data={data} /> 
            <MapFormComponent
                dateTime={dateTime}
                setDateTime={setDateTime}
                onSubmit={handleSubmit} 
            />
        </div>
    );
};

export default MapPage;