import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function useCoordenadas() {
    const [coordenadas, setcoordenadas] = useState({
        latitud: null,
        longitud: null
    });
    let geoid;

    useEffect(() => {
        geoid = window.navigator.geolocation.watchPosition(position => {
            setcoordenadas({
                latitud: position.coords.latitude,
                longitud: position.coords.longitude
            });
        });
        return () => {
            navigator.geolocation.clearWatch(geoid);
        };
    });

    return coordenadas;

}

export default function Coordenadas() {
    const coordenadas = useCoordenadas();
    return coordenadas.latitud == null ? ( <
        div > Cargando... < /div>

    ) : ( <
        div >
        <
        h2 > Latitud: { coordenadas.latitud } < /h2> <
        h2 > Longitud: { coordenadas.longitud } < /h2> < /
        div >
    );
}