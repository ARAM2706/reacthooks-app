import './App.css';
import { Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


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

export default Example;