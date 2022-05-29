import './App.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return ( <
        Router >
        <
        div >
        <
        ul >
        <
        li >
        <
        Link to = "/example" > Hook Clase < /Link>  <
        /li >  <
        li >
        <
        Link to = "/coordenadas" > Hook Tarea < /Link>  <
        /li >  <
        /ul> <
        Routes >
        <
        Route exact path = "/example"
        element = { < Example / > } >
        <
        /Route>  <
        Route path = "/coordenadas"
        element = { < Coordenadas / > } >
        <
        /Route>  <
        /Routes >  <
        /div>  <
        /Router >
    );
}

function Example() {
    const [count, setCount] = useState(0);

    // De forma similar a componentDidMount y componentDidUpdate
    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        document.title = `You clicked ${count} times`;
    });

    return ( <
        div >
        <
        p > You clicked { count }
        times < /p> <
        Button onClick = {
            () => setCount(count + 1)
        } >
        Click me <
        /Button> < /
        div >
    );
}

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

function Coordenadas() {
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

export default App;