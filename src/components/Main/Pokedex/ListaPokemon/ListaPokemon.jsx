import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { PokeListContext } from '../../../../context/pokeListContext';

const ListaPokemon = () => {
  
  const { pokeList } = useContext(PokeListContext);

  return (
    <section className="lista-container">
      <h2 className="lista-title">List of Pokemon</h2>
      <div className="cards-container">
        {pokeList.map((pokemon, index) => (
          <div key={index}>
            <Link
              to={`/pokemon/:?id=${pokemon.id}&name=${pokemon.name}&image=${pokemon.img}&height=${pokemon.height}
              &weight=${pokemon.weight}&base_exp=${pokemon.base_experience}&moves=${pokemon.moves}&abilities=${pokemon.abilities}&typeOne=${pokemon.types[0]}&typeTwo=${pokemon.types[1] || ''}`}
              className="pokemon-link"
            >
              <Card
                name={pokemon.name}
                image={pokemon.img}
                types={pokemon.types}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListaPokemon;



