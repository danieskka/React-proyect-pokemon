import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Main/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;