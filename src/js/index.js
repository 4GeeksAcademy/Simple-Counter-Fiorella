// Importa React y ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Importa los estilos
import "../styles/index.css";

// Importa el componente del contador de segundos
import SecondsCounter from "./component/SecondsCounter.jsx";

// Inicializa el tiempo
let time = 0;

// Crea el punto de entrada de la aplicación en el DOM
const app = ReactDOM.createRoot(document.getElementById("app"));

// Renderiza el contador de segundos
app.render(<SecondsCounter seconds={time} />);

// Actualiza el componente cada segundo
setInterval(() => {
  time++;
  app.render(<SecondsCounter seconds={time} />);
}, 1000);
