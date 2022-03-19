// BrowserRouter => va a envolver todas la rutas que creemos
// Routes => Es el child del BrowserRouter el cual va a permitir crear las rutas pon
// Route=> Es el encargado de recibir el Path y el element y renderizar el element en el path creado

import { BrowserRouter, Routes, Route } from "react-router-dom";
// para usar home en el router hay que importarlo
import Home from "../pages/Home";
import Flags from "../pages/Flags";

const Router = () => {
    // como esto es un componente tenemos que usar return para poder pintar o crear las rutas
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/flags" element={<Flags/>} />
            </Routes>
        </BrowserRouter>
    )
};

export default Router