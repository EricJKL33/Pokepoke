import { useState } from "react";
import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
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

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
