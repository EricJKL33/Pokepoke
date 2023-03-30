import "./App.css";
import PokemonCard from "./assets/component/PokemonCard";
import { useState } from "react";

function App() {
  let [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemon = pokemonList[pokemonIndex];
  const nextButtonClick = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const lastButtonClick = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  return (
    <div className="App">
      <PokemonCard pokemon={pokemon} />
      <button onClick={lastButtonClick}>Last Pokemon</button>
      <button onClick={nextButtonClick}>Next Pokemon</button>
    </div>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

export default App;
