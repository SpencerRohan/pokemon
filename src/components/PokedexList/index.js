/**
 * Component: PokedexList
 */
const PokedexList = ({ pokemon, onGetDetails }) => {
  if (pokemon?.length === 0) {
    return <div>We can't catch that Pokémon!</div>;
  }

  return (
    <ul
      className={"pokedex__search-results"}
      aria-label="Pokemon search results"
    >
      {pokemon.map((monster) => (
        <li className={"pokedex__list-item"} key={monster.name}>
          <div>{monster.name}</div>
          <button type="button" onClick={onGetDetails(monster.name)}>
            Get Details<span className="sr-only"> for {monster.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PokedexList;
