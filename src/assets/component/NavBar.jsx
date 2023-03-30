function NavBar({ pokemonIndex, setPokemonIndex }) {
  const nextButtonClick = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const lastButtonClick = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  return (
    <div className="NavBar">
      <button onClick={lastButtonClick}>Last Pokemon</button>
      <button onClick={nextButtonClick}>Next Pokemon</button>
    </div>
  );
}

export default NavBar;
