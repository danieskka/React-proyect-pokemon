import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { PokeListContext } from './context/pokeListContext';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {

  const [pokeList, setPokeList] = useState([]);

  return (
    <BrowserRouter>
        <Header />
        <PokeListContext.Provider value={{ pokeList, setPokeList }}>
          <Main/>
        </PokeListContext.Provider>
        <Footer />
    </BrowserRouter>
  );
}

export default App;