import { useState } from "react"
// import { Button, Form } from "react-bootstrap";
import {TextField, Button} from "@mui/material"

const FormUser = () => {
    // La otra forma en la cual podemos guardar de los datos de los inputs
    // es un objeto para ellos necesitamos que los inputs tengan un name
    // para que el name sea un key y este valor se obtenga de los inputs

    //debemos de crear una variable que tenga por defecto los names pero
    //los values esten vacios

    const [valorInputs, setValorInputs]= useState ({
        nombre: "",
        apellido: "",
        email: "",
        password: ""
    });

    console.log(valorInputs);

    // Ahora debemos contruir una funcion que se encargue de almacenar los
    // en el objeto
    const handleInputValues = (e) => {
        
        // crear un destructor con los dos objetos que quiero traer del evento event
        const { name, value } = e.target;

        //...valorInputs =>  trae una copia del objeto actual y ademas estamos agregando una copia de el
        // nuevo key y value que recibimos
        setValorInputs({
            ...valorInputs,
            //traemos el valor del input
            [name]: value
        })
    }
    
    const Imprimir = (e) => {
        //Hace que la pagina no se recargue
        e.preventDefault();

        console.log(valorInputs);
    }

    return (
        <form>
            {/* la forma en la cual usamos una clase es usando el className */}
            <h4 className="title">Registro de Usuarios</h4>
            <h5>Nombre {valorInputs.nombre}</h5>
            <p><TextField name="nombre" onChange={handleInputValues} type="text" label="Ingrese su Nombre"/></p>
            <p><TextField name="apellido" onChange={handleInputValues} type="text" label="Ingrese su apellido"/></p>
            <p><TextField name="email" onChange={handleInputValues} type="email" label="Ingrese su email"/></p>
            <p><TextField name="password" onChange={handleInputValues} type="password" label="Ingrese su password"/></p>
            <p><Button variant="contained" color="primary" onClick={Imprimir} type="submit">Crear</Button></p>    
        </form>
    );    
};

export default FormUser;