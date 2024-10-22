// src/hooks/useMapData.js
import { useState } from 'react';
import { fetchMapData} from '../service/mapService';

const useMapData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (date, hour) => {
        setLoading(true);
        try {
            const geoJsonData = await fetchMapData(date, hour); 
            setData(geoJsonData);  
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, fetchData };
};

export default useMapData;