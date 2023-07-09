import React, { useEffect, useState } from "react";
import axios from "axios";
import { Circle } from 'react-spinners-css';

import ListaPokemon from "./ListaPokemon/ListaPokemon";
import Search from "./Search/Search";
import useDebounce from "../../../hooks/useDebounce";

const Pokedex = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokeList, setPokeList] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedPokemonName = useDebounce(pokemonName, 2500);

  useEffect(() => {
    const fetchData = async () => {
      if (debouncedPokemonName && !pokeList.find((pokemon) => pokemon.name === debouncedPokemonName)) {
        try {
          setIsSearching(true);

          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debouncedPokemonName}/`);
          const data = response.data;

          const name = data.name;
          const img = data.sprites.other.home.front_default;
          const height = data.height;
          const types = data.types ? data.types.map((type) => type.type.name) : [];
          const weight = data.weight;
          const addNewPokemon = { name, img, height, types, weight };

          setPokeList([...pokeList, addNewPokemon]);
          setIsSearching(false);
        } catch (error) {
          console.log("Error:", error);
          setIsSearching(false);
        }
      }
    };

    if (debouncedPokemonName.trim() !== "") {
      fetchData();
    }
  }, [debouncedPokemonName, pokeList]);

  const handlePokemon = (pokeName) => {
    setPokemonName(pokeName);
  };

  return (
    <section>
      <Search handlePokemon={handlePokemon} />
      {isSearching ? (
        <div>
          <Circle color="orange" size={100} />
        </div>
      ) : ( <ListaPokemon pokeList={pokeList} />
      
)}
    </section>
  );
};

export default Pokedex;