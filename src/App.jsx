import MyTitle from './assets/component/MyTitle';
import './App.css'
import PokemonCard from './assets/component/PokemonCard';

function App() {
  const pokemon = pokemonList[0]
  return (
    <div className="App">
      <PokemonCard pokemon = {pokemon}/>
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
    name: "mew",
  },
];


export default App;
