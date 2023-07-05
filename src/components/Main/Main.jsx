import { Routes, Route } from 'react-router-dom';

import Search from '../Search/Search';
import ListaPokemon from '../ListaPokemon/ListaPokemon';

const Main = () => {
  return <main>
    <Routes>
      <Route path="/" element={<ListaPokemon/>}/>
      <Route path="/search" element={<Search/>}/>
    </Routes>
  </main>
};

export default Main;
