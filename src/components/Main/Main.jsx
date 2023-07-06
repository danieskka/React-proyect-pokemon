import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import Pokedex from './Pokedex/Pokedex';

const Main = () => {
  return (
  <main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<Pokedex/>}/>
    </Routes>
  </main>
  )
};

export default Main;
