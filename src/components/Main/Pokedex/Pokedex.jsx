import React, { useEffect, useState } from "react";
import axios from "axios";

import { Circle, Heart } from 'react-spinners-css';

import ListaPokemon from "./ListaPokemon/ListaPokemon";
import Search from "./Search/Search";

const Pokedex = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokeList, setPokeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePokemon = async (pokeName) => {
    setPokemonName(pokeName);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (pokemonName) {
        try {
          setIsLoading(true);

          // Simulación de tiempo de espera con setTimeout
          setTimeout(async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
            const data = response.data;

            const name = data.name;
            const img = data.sprites.other.home.front_default;
            const height = data.height;
            const types = data.types ? data.types.map((type) => type.type.name) : [];
            const weight = data.weight;
            const addNewPokemon = { name, img, height, types, weight };

            setPokeList([...pokeList, addNewPokemon]);
            setIsLoading(false);
          }, 1000); // 3 segundos de tiempo de espera
        } catch (error) {
          console.log("Error:", error);
        }
      }
    };

    fetchData();
  }, [pokemonName]);

  return (
    <section>
      <Search handlePokemon={handlePokemon} />
      {isLoading ? (
        <div>
          <Circle color="orange" size={100}/>
        </div>
      ) : (
        <ListaPokemon pokeList={pokeList} />
      )}
    </section>
  );
};

export default Pokedex;



// import { useEffect, useState } from "react";
// import axios from "axios";

// import ListaPokemon from "./ListaPokemon/ListaPokemon";
// import Search from "./Search/Search";

// const Pokedex = () => {
//   const [pokemonName, setPokemonName] = useState("");
//   const [pokemonData, setPokemonData] = useState(null);
//   const [pokeList, setPokeList] = useState([]);

//   const handlePokemon = async (pokeName) => {
//     setPokemonName(pokeName);

//     try {
//       const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`);
//       const data = response.data;
//       setPokemonData(data);

//       const name = data.name;
//       const img = data.sprites.other.home.front_default;
//       const addNewPokemon = { name, img };
//       setPokeList([...pokeList, addNewPokemon]);
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };

//   useEffect(() => {
//     if (pokemonName) {
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
//           const data = response.data;
//           setPokemonData(data);
//         } catch (error) {
//           console.log("Error:", error);
//         }
//       };
//       fetchData();
//     }
//   }, [pokemonName]);

//   return (
//     <section>
//       <Search handlePokemon={handlePokemon} />
//       <ListaPokemon pokeList={pokeList} />
//     </section>
//   );
// };

// export default Pokedex;
