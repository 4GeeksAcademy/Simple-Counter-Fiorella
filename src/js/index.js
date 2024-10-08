// Importa React en el proyecto
import React from "react";
import ReactDOM from "react-dom/client";

// Incluye tus estilos en el bundle de webpack
import "../styles/index.css";


import SecondsCounter from "./component/SecondsCounter.jsx";


let time = 0;

// se usa el "time" para que se actualice

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<SecondsCounter seconds={time} />);

// Actualiza el componente 
setInterval(() => {
    time++;
    app.render(<SecondsCounter seconds={time} />);
}, 1000);
