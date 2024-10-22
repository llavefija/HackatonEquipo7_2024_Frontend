import axios from 'axios';

import { GET_MAP_DATA, IS_PRODUCTION } from '../api/apiUrls';


const API_PROD_URL = "/src/api/pointsCoords.geojson";

export const fetchMapData = async (fecha, hora) => {
    try {

        let response
        if (IS_PRODUCTION) {
            response = await axios.get(API_PROD_URL, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } else {
            response = await axios.get(`${GET_MAP_DATA}${fecha}/${hora}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        console.log("response", response);
        return {
            type: "FeatureCollection",
            features: response.data
        };
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Error fetching map data');
    }
};