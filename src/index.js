import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

//Al importar el archivo el archivo index css al index.js este esta haciendo un import global
//Es decir lo puedo usar desde cualquier archivo del proyecto
import './index.css';

import reportWebVitals from './reportWebVitals';

// para importar un componente debemos inportarlo por el nombre que fue exportado
// import PrimerComponente from "./App";

// No hace falta llamar al index porque por default la carpeta
// que se importa es el index
import Home from "./pages/Home"

ReactDOM.render(
  <React.StrictMode>
    {/* Para usar un componente debo usarlo como si fuera una etiqueta de HTML */}
    {/* <PrimerComponente/> */}
    <Home></Home>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
