/**
 * Component: Search
 */
const Search = ({ searchValue, onSearchValueChange }) => {
  return (
    <div className={"pokedex__search-input"}>
      <label htmlFor="pokemon-search" className="sr-only">
        Search for a Pokémon by name
      </label>
      <input
        id="pokemon-search"
        type="text"
        value={searchValue}
        onChange={onSearchValueChange}
        placeholder={"Search Pokémon"}
      />
    </div>
  );
};

export default Search;
