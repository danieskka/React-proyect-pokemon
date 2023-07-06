import {useEffect, useState} from "react";
import axios from "axios";

import ListaPokemon from "./ListaPokemon/ListaPokemon";
import Search from "./Search/Search";

const Pokedex = () => {

  const [pokemonName, setPokemonName] = useState(""); // Estado para almacenar el nombre del Pokémon
  const [pokemonData, setPokemonData] = useState(null); // Estado para almacenar los datos del Pokémon

  const handlePokemon = (pokeName) => {
    setPokemonName(pokeName);
  }

  useEffect(() => {
    if (pokemonName) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
          const data = response.data;
          setPokemonData(data);
        } catch (error) {
          console.log("Error:", error);
        }
      };
      fetchData();
    }
  }, [pokemonName]);

  return (
    <section>
      <Search handlePokemon={handlePokemon}/>
      <ListaPokemon pokemonData={pokemonData}/>
    </section>
  )
};

export default Pokedex;
