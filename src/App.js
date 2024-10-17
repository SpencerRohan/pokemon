import { useEffect, useState } from "react";
import { fetchAllByName, fetchAllPokemon } from "./api";
import PokedexList from "./components/PokedexList";
import Search from "./components/Search";
import PokemonDetails from "./components/PokemonDetails";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [pokemonDetails, setPokemonDetails] = useState();
  const [pokemonDetailsCache, setPokemonDetailsCache] = useState({});

  useEffect(() => {
    try {
      const fetchPokemon = async () => {
        const { results: pokemonList } = await fetchAllPokemon();
        setPokemon(pokemonList);
        setPokemonIndex(pokemonList);
      };

      fetchPokemon().then(() => {
        /** noop **/
      });
    } catch (error) {
      console.error("Error catching them Pokémon:", error);
    }
  }, []);

  const onSearchValueChange = (event) => {
    const value = event.target.value;
    setPokemonDetails(null);
    setSearchValue(value);

    setPokemon(
      pokemonIndex.filter((monster) =>
        monster.name.includes(value.toLowerCase())
      )
    );
  };

  const onGetDetails = (name) => async () => {
    if (pokemonDetailsCache[name]) {
      setPokemonDetails(pokemonDetailsCache[name]);
    }

    try {
      const details = await fetchAllByName(name);
      setPokemonDetails(details);
      setPokemonDetailsCache((prevCache) => ({
        ...prevCache,
        [name]: details,
      }));
    } catch (error) {
      console.error(`Error catching ${name}:`, error);
    }
  };

  return (
    <section className={"pokedex__container"} aria-label="Pokedex">
      <h1 class="sr-only">Pokedex</h1>
      <Search
        searchValue={searchValue}
        onSearchValueChange={onSearchValueChange}
      />
      <div className={"pokedex__content"}>
        <PokedexList pokemon={pokemon} onGetDetails={onGetDetails} />
        <PokemonDetails pokemonDetails={pokemonDetails} />
      </div>
    </section>
  );
}

export default App;
