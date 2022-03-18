// reac siempre va primero
import { useEffect, useState } from "react";

// En matirial existe un tipo de tag llamado container el cual
// crea una especie de div

import {Container, Card, CardContent, CardMedia, Grid} from "@mui/material"

// Como poder traer la funcion que se encarga de traer a los poquemones
// cuando es una sola funcion va normal, cuando es mas de una llaves
import { getDataFromPokemon } from "../../service/index";

import PokemonDetail from "../../components/PokemonDetails";

const Home = () => {
    //Vamos a crear una variable la cual se encargue de crear la lista
    //de poquemones

    const [pokemons,setPokemon] = useState([]);

    const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";
    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/

    //debemos crear una funcion la cual se encargue de ejecutar 
    // getdatafrompokemens y la data que retorne esa funcion guardarla
    // en pokemons

    const fetchPokemonList = async() => {
        const listPokemons = await getDataFromPokemon();
        // como ya recuperamos la lista de los pokemones hay que usar
        // la funcion set pokemons para usar la lista en pokemons
        console.log("listPokemons.results",listPokemons.results);
        setPokemon(listPokemons.results);
    }

    //En react existe una funcion llamada useEffect la cual se ejecuta
    //cuando la pagina esta iniciando, vamos a usar useEffect si quere
    //mos ejecutar al inicio de la aplicacion
    //La estructura del useEffect es la siguiente
    //ejecuta una funcion cuando la pagina se esta cargando
    useEffect(() => {
        //para useeffet debe colocar un array vacio
        //esto evita un array infinito si no colocamos un array
        //sino la funcion que esta dentro del use efect se llama 
        //infinitamente
    
        fetchPokemonList();
    },[])

    const color = {
        red: "rgba(255, 48, 50, 0.7)",
        green: "rgba(83, 180, 50, 0.7)",
        blue: "rgba(113, 104, 226, 0.7)",
        brown: "rgba(113, 104, 226, 0.7)",
        purple: "rgba(113, 104, 226, 0.7)",
        pink: "rgba(255, 48, 50, 0.7)",
        yellow: "rgba(229, 216, 0, 0.6)",
      };
    
      const getColorPokemon = async (id) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${id}`);
      
        const data = await response.json();
        console.log(data.color.name);
        return color[data.color.name];
      };

    return (
        <Container>
            <h1>Pokedex</h1>
            <Grid container spacing={3}>
            {pokemons.length > 0 &&
            pokemons.map((pokemon, index) => (
                // aca el codigo visual
                <Grid item md={3} lg={3} sm={12} xs={12}>
                <Card className="card-pokemon">
                    {/* sx={{backgroundColor: `${JSON.stringify(getColorPokemon(index+1))}`}} */}
                    <CardMedia component="img" className="img-pokemon" image={`${imgUrl}${index + 1}.svg`} />
                    <CardContent>
                    <h3 className="name-pokemon">{pokemon.name}</h3>
                    <PokemonDetail nombre={pokemon.name} url={pokemon.url} imagen={`${imgUrl}${index + 1}.svg`} numero={`Pokemon N° ${index + 1}`}/>
                    </CardContent>
                </Card>
                </Grid>
            ))}
        </Grid>
        </Container>
    );
};

export default Home;