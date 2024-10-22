import { describe, it, expect, afterEach, vi } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchMapData } from '../../src/service/mapService'; // Modifica il percorso con quello corretto

const mockAxios = new MockAdapter(axios);

describe('fetchMapData', () => {
    const fecha = '2024-10-22';
    const ora = '12:00';

    afterEach(() => {
        mockAxios.reset(); 
        vi.clearAllMocks(); 
    });

    it('should return map data when IS_PRODUCTION is true', async () => {
        vi.mock('../api/apiUrls', () => ({
            IS_PRODUCTION: true,
        }));
    
        const responseData = [
            {
                type: "Feature",
                properties: {
                    id: 497,
                    name: "Sant Maria del Mar",
                    font: "TRÀNSIT",
                    dbColor: 9,
                    db: 61.0
                },
                geometry: {
                    type: "Point",
                    coordinates: [2.166773, 41.37485]
                }
            }
        ];
    
        mockAxios.onGet("/src/api/pointsCoords.geojson").reply(200, responseData);
    
        const result = await fetchMapData(fecha, ora);
    

        expect(result).toEqual({
            type: 'FeatureCollection',
            features: responseData, 
        });
    });

    
    it('should throw an error when the request fails', async () => {
        vi.mock('../api/apiUrls', () => ({
            IS_PRODUCTION: false,
        }));

        mockAxios.onGet(`/some-development-url/${fecha}/${ora}`).reply(404, {
            message: 'Not Found'
        });

        await expect(fetchMapData(fecha, ora)).rejects.toThrow('');
    });
});