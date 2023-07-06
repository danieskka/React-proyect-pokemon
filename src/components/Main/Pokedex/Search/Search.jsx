import { useState } from "react";

const Search = ({ handlePokemon }) => {

const [pokeName, setPokeName] = useState('');
const [pokeList, setPokeList] = useState([]);

const handleSubmit = (e) => {
  e.preventDefault();
  // if (pokeName.trim() !== "") { // comprobar que no esta vacio el campo del nombre
    handlePokemon(pokeName);
    setPokeName('');

    const pokeArray = [];
    setPokeList(pokeArray.push(pokeName));
    
  // }
};

const handleChange = (e) => {
    setPokeName(e.target.value)

};
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="pokemon" placeholder="Busca un Pokemon" value={pokeName} onChange={handleChange}></input>
      <button type="submit">Buscar</button>
    </form>
  )
};

export default Search;
