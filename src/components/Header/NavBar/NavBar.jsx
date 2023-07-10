import React from "react";
import { Link } from "react-router-dom";

import ultraBallImg from "../../../assets/Ultra_Ball_(Ilustración).png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-ultra-ball-container">
        <img
          src={ultraBallImg}
          alt="Ultra Ball"
          className="ultra-ball ultra-ball-left"
        />
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/search">Search Pokemons</Link>
        </li>
        <li className="navbar-item">
          <Link to="/new">Sign Up Pokemons</Link>
        </li>
      </ul>
      <div className="navbar-ultra-ball-container">
        <img
          src={ultraBallImg}
          alt="Ultra Ball"
          className="ultra-ball ultra-ball-right"
        />
      </div>
    </nav>
  );
};

export default NavBar;
