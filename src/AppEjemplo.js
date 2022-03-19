import Header from "./Header"
import Footer from "./Footer"
// import Form from "./Form";
import Form from './FormUser'

// Paso 1 importar useState
import { useState } from "react";

const PrimerComponente = () => {
  // crear una variable y mostrarla en react
  const edad = 99;

  const [count, setCount] = useState(0);

  // otra forma es usar Use style
  // Permite manejar el estado de una variable

  const sumar = () => setCount(count + 1);

  const restar = () => {
    setCount(count - 1)
  };

  const Parametros = (n1, n2) => {
    setCount(n1 + n2);
  };

  return (
    <div>
      <Header></Header>
      <h1>Hola Mundo</h1>
      <div>
        <h4>Sumar o restar desde el componente {count}</h4>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={()=>Parametros(10,20)}>Restar</button>
      </div>
      <hr></hr>
      {/* <Form></Form> */}
      <Form></Form>
      <Footer></Footer>
    </div>
  );
};

// Exportamos el componente
export default PrimerComponente;
