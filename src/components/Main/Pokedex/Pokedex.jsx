import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Circle } from 'react-spinners-css';
import { PokeListContext } from "../../../context/pokeListContext";

import ListaPokemon from "./ListaPokemon/ListaPokemon";
import Search from "./Search/Search";
import useDebounce from "../../../hooks/useDebounce";

const Pokedex = () => {

  const { pokeList, setPokeList } = useContext(PokeListContext);

  const [pokemonName, setPokemonName] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const [error, setError] = useState(false);

  const handlePokemon = (pokeName) => {
    setPokemonName(pokeName);
  };

  const debouncedPokemonName = useDebounce(pokemonName, 2500);

  useEffect(() => {
    const fetchData = async () => {
      if (debouncedPokemonName && !pokeList.find((pokemon) => pokemon.name === debouncedPokemonName)) {
        try {
          setIsSearching(true);
          setError(false);

          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debouncedPokemonName}/`);
          const data = response.data;

          const name = data.name;
          const img = data.sprites.other.home.front_default;
          
          const height = data.height;
          const types = data.types ? data.types.map((type) => type.type.name) : [];
          const weight = data.weight;
          const id = data.id;
          const base_experience = data.base_experience;
          const moves = data.moves ? data.moves.map((move) => move.move.name).slice(0, 5) : [];
          const abilities = data.abilities ? data.abilities.map((ability) => ability.ability.name) : [];

          const addNewPokemon = { name, img, height, types, weight, id, base_experience, moves, abilities };

          setPokeList([...pokeList, addNewPokemon]);
          setIsSearching(false);
        } catch (error) {
          console.log("Error:", error);
          setIsSearching(false);
          setError(true);
        }
      }
    };

    if (debouncedPokemonName.trim() !== "") {
      fetchData();
    }
  }, [debouncedPokemonName, pokeList, setPokeList]);

  return (
    <section>
      <Search handlePokemon={handlePokemon}/>
      {isSearching ? (
        <div>
          <Circle color="orange" size={100} />
        </div>
      ) : error ? (
        <div>
          <h2>So sorry, try it again...</h2>
          <img src="https://i.gifer.com/XJ1C.gif" alt="Error GIF" />
        </div>
      ) : (
        <ListaPokemon pokeList={pokeList} />
      )}
    </section>
  );
};

export default Pokedex;