import { useState } from "react";

// Componente el cual nos renderizara un formulario de registro

const FormRegister = () => {
    //como podemos capturar el valor de un input
    const[nombre, setNombre] = useState("");
    const[apellido, setApellido] = useState("");

    // En react la forma en la cual obtenemos el valor de un input
    // es usando en onChange, nos va a permitir capturar el valor
    // de los inputs y guardalos en una variable

    //con evento podemos obtener el valor del input
    //event.target.value

    //cada vez que se ejecute el onChange se llame y modifique a la
    //variable nombre

    //event no es un nombre obligatorio esta es cambiado por 
    // ejemplo por e
    const handleInputName = (event) => {
        setNombre(event.target.value);
    }

    const handleInputLastName = (event) => {
        setApellido(event.target.value);
    }

    return (
        <form>
            <h4>Formulario de Registro</h4>
            <h4>Nombre {nombre}</h4>
            <h4>Apellido {apellido}</h4>
                <p><input type="text" onChange={handleInputName} placeholder="Ingrese su nombre"/></p>
                <p><input type="text" onChange={handleInputLastName} placeholder="Ingrese su apellido"/></p>
                <p><input type="email" placeholder="Ingrese su email"/></p>
                <p><input type="password" placeholder="Ingrese su password"/></p>
                <div class="d-grid gap-2">
                    <button type="submit">Crear</button>
                </div>
        </form>
    );
}

export default FormRegister;