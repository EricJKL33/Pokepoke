function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  return (
    <div className="NavBar">
      {pokemonList.map((article, index) => (
        <button
          onClick={() => {
            setPokemonIndex(index);
          }}
        >
          {article.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
