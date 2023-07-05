import Card from './Card';

const ListaPokemon = ({ pokemonData }) => {
  return (
    <div>
      <h2>Lista de Pokemon</h2>
      {pokemonData && pokemonData.sprites && (
        <Card
          name={pokemonData.name}
          image={pokemonData.sprites.other.home.front_default}
          // Otros datos que deseas pasar a la Card
        />
      )}
    </div>
  );
};

export default ListaPokemon;
