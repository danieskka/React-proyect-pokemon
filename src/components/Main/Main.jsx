import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import Pokedex from './Pokedex/Pokedex';
import Form from './Pokedex/Form/Form';
import Details from './Pokedex/ListaPokemon/Details/Details';

const Main = () => {
  return (
  <main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<Pokedex/>}/>
      <Route path="/new" element={<Form/>}/>
      <Route path="/pokemon/:id" element={<Details/>}/>
    </Routes>
  </main>
  )
};

export default Main;
