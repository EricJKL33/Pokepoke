

// const pokemonList = [
//     {
//         name: "bulbasaur",
//         imgSrc:
//         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
//     },
//     {
//         name: "mew",
//     },
// ];

// function PokemonCard() {
//     const pokemon = pokemonList[0];
//   return (
//     <figure className="card">
//       <img src={pokemon.imgSrc} alt={pokemon.name} className="card-img" />
//       <figcaption>{pokemon.name}</figcaption>
//     </figure>
//   );
// }



// export default PokemonCard;



import { useState } from "react";

function PokemonCard({pokemon}) {
//   const [pokemon, setPokemon] = useState(props.pokemon);

//   const handleButtonClick = () => {
//     setPokemon(props.pokemon);
//   };

  return (
    <figure className="card">
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} className="card-img" />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
      {/* <button onClick={handleButtonClick}>Next Pokemon</button> */}
    </figure>
  );
}



export default PokemonCard;