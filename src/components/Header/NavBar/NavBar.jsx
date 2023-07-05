import { Link } from "react-router-dom";

const NavBar = () => {
  return <nav>
    <ul>
      <li><Link to ="/">Lista de Pokemons</Link></li>
      <li><Link to ="/search">Search Pokemons</Link></li>
    </ul>
  </nav>
};

export default NavBar;
