import { useState } from "react";

const Search = ({ handlePokemon }) => {

const [pokeName, setPokeName] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  if (pokeName.trim() !== "") { // comprobar que no esta vacio el campo del nombre
    handlePokemon(pokeName);
    setPokeName('');
  }
};

const handleChange = (e) => {
  const inputValue = e.target.value;
  setPokeName(inputValue);
  handlePokemon(inputValue);
};

  
return (
  <article className="search-container">
    <form onSubmit={handleSubmit} className="search-form">
      <input type="text" name="pokemon" placeholder="Search Pokemon" value={pokeName} onChange={handleChange} className="search-input"></input>
      <button type="submit" className="button-78">Search</button>
    </form>
  </article>
)
};

export default Search;
