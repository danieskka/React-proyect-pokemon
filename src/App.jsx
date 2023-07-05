import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import ListaPokemon from './components/ListaPokemon/ListaPokemon';

function App() {
  
  const [pokemonData, setPokemonData] = useState(""); // Estado para almacenar los datos del Pokemon

  const handlePokemon = async (pokeName) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`);
      const data = response.data;
      setPokemonData(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Search handlePokemon={handlePokemon} />
      <ListaPokemon pokemonData={pokemonData} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
