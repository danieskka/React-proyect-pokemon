import React from "react";

const Home = () => {
  return (
    <>
      <h1>Welcome to the Pokemon World!</h1>

      <article className="home-container">

        <section className="gif-container">
          <img className="gif" src="https://i.gifer.com/V5NL.gif" alt="Pikachu_GIF" />
        </section>

        <section className="gif-container">
        <img className="gif" src="https://i.gifer.com/JTIA.gif" alt="Eevee_GIF" />
        </section>

        <section className="gif-container">
        <img className="gif" src="https://i.gifer.com/69SD.gif" alt="2pikachu_GIF" />
        </section>
        
      </article>
    </>
  );
};

export default Home;