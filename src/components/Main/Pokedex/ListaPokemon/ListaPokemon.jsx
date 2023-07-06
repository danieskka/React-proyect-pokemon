import Card from './Card';

const ListaPokemon = ({ pokeList }) => {
  return (
    <section className="lista-container">
      <h2 className="lista-title">Lista de Pokemon</h2>
      <div className="cards-container">
      {pokeList.map((pokemon, index) => (
        <Card
          key={index}
          name={pokemon.name}
          image={pokemon.img}
          height={pokemon.height}
          types={pokemon.types}
          weight={pokemon.weight}
        />
      ))}
      </div>
    </section>
  );
};

export default ListaPokemon;
