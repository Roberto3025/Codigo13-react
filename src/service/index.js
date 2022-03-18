// esto sera nuestro archivo donde vamos a almacenar las peticiones
//una buena practiva es tener la url del api en una variable

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=200";

// podemos crear una funcion generica la cual se encargue de hacer una
// peticion
// Como parametro vamos a recibir la URL, qye puede ser la que lista
// o la que nos da el detalle
// *url sera el parametro a donde se ira la peticion
// url = URL_BASE, si url esta vacion es decir el valor por defecto sera
//BASE_URL

export const getDataFromPokemon = async (url = BASE_URL) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
};

// export const storePokemon = async () => {}

// El export default exporta solo una funcion
// export exporta multiples funciones
