import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css';

const HeatMap = () => {
    const apiKey = import.meta.env.VITE_API_KEY
    const mapRef = useRef()
    const mapContainerRef = useRef()

    useEffect(() => {
        mapboxgl.accessToken = apiKey
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: [
                2.1661179403523905, 41.4002561962482
            ],
            zoom: 12.12,
            maxzoom: 9,
            style: 'mapbox://styles/mapbox/dark-v11'
        });

        mapRef.current.addControl(new mapboxgl.FullscreenControl())
        mapRef.current.addControl(new mapboxgl.NavigationControl())

        mapRef.current.on('load', () => {
            mapRef.current.addSource('bcn_boundaries', {
                type: 'geojson',
                data: '/src/data/terme-municipal.geojson',
            });

            mapRef.current.addSource('crowd_data', {
                type: 'geojson',
                data: '/src/api/pointsCoords.geojson',
            });
            mapRef.current.addLayer({
                id: 'barcelona-heatmap',
                type: 'heatmap',
                source: 'crowd_data',
                maxzoom: 15,
                paint: {
                    'heatmap-weight': [
                        'interpolate',
                        ['linear'],
                        ['get', 'crowd_level'],
        
                        1, 0,  
                        9, 1
                    ],

                    'heatmap-intensity': {
                        stops: [
                            [11, 1],
                            [15, 3],
                        ],
                    },

                    'heatmap-color': [
                        'interpolate',
                        ['linear'],
                        ['heatmap-density'],
                        0, 'rgba(0,255,0,0)',
                        1 / 9, 'rgba(0,255,0,0.2)',
                        2 / 9, 'rgba(173,255,47,0.4)',
                        3 / 9, 'rgba(255,255,0,0.6)',
                        4 / 9, 'rgba(255,204,0,0.7)',
                        5 / 9, 'rgba(255,153,51,0.8)',
                        6 / 9, 'rgba(255,102,0,0.9)',
                        7 / 9, 'rgba(255,51,0,1)',
                        1, 'rgb(255,0,0)'
                    ],

                    'heatmap-radius': {
                        stops: [
                            [11, 50],
                            [15, 20],
                        ],
                    },

                    'heatmap-opacity': {
                        default: 1,
                        stops: [
                            [14, 1],
                            [15, 0],
                        ],
                    },
                },
            })

            mapRef.current.addLayer({
                id: 'bcn_boundaries',
                type: 'line',
                source: 'bcn_boundaries',
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round',
                },
                paint: {
                    'line-color': '#01D098',
                    'line-width': 3,
                },
            });
        });

        mapRef.current.on('click', (evt) => {
            const features = mapRef.current.queryRenderedFeatures(evt.point, {
                layers: ['barcelona-heatmap'],
            })
            if (!features.length) {
                return
            }
            const feature = features[0]

            const coordinates = feature.geometry.coordinates.slice()
            const description = `<h3 style="margin: 0; font-size: 14px; color: black; padding: 4px;"
        >${feature.properties.name}</h3>
        <button style="margin: 0; color: black; padding: 2px, 4px; border: 1px solid black;">
        <a href="/map/${feature.properties.id}">Detaiils</a></button>
        `
            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(mapRef.current);
        })

        return () => {
            mapRef.current.remove()
        }
    }, [apiKey]);



    return (

        <div className="absolute bg-gray-300 h-full w-full" ref={mapContainerRef} />

    )
}

export default HeatMap


