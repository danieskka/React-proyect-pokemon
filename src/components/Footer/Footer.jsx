import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://www.pokemon.com/es"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here towards oficial Pokemon site
      </a>
      <img
        src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/02/latest/20090125150654/Pok%C3%A9_Ball_%28Ilustraci%C3%B3n%29.png/800px-Pok%C3%A9_Ball_%28Ilustraci%C3%B3n%29.png"
        alt="Pokeball"
        className="pokeball-image"
      />
    </footer>
  );
};

export default Footer;
