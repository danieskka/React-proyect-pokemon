import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PokeListContext } from '../../../../context/pokeListContext';

import Card from './Card';

const ListaPokemon = () => {
  
  const { pokeList } = useContext(PokeListContext);

  return (
    <section className="lista-container">
      <h2 className="lista-title">List of Pokemon</h2>
      <div className="cards-container">
        {pokeList.map((pokemon, index) => (
          <div key={index}>
            <Card
                name={pokemon.name}
                image={pokemon.img}
                height={pokemon.height}
                types={pokemon.types}
                weight={pokemon.weight}
            />
            <Link
              to={`/pokemon/${index + 1}?name=${pokemon.name}&image=${pokemon.img}&height=${pokemon.height}
              &weight=${pokemon.weight}&typeOne=${pokemon.types[0]}&typeTwo=${pokemon.types[1] || ''}`}
              className="pokemon-link"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListaPokemon;



