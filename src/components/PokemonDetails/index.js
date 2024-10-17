import getEvolutionNames from "../../utils/getEvolutionNames";
import Pokeball from "../Pokeball";

/**
 * Component: PokemonDetails
 */
const PokemonDetails = ({ pokemonDetails }) => {
  if (!pokemonDetails) {
    return null;
  }

  const { details, evolution } = pokemonDetails;

  return (
    <div className={"pokedex__details-and-pokeball"}>
    <aside className={"pokedex__details"}>
      <h2 className={"title-3"}>{details.name}</h2>

      {/* Types */}
      <div className={"pokedex__details-content"}>
        <div>
          <h3>Types</h3>
          <ul>
            {details.types.slice(0, 4).map(({ type: evolutionType }) => {
              return <li key={evolutionType.name}>{evolutionType.name}</li>;
            })}
          </ul>
        </div>

        {/* Moves */}
        <div>
          <h3>Moves</h3>
          <ul>
            {details.moves.slice(0, 4).map(({ move }) => {
              return <li key={move.name}>{move.name}</li>;
            })}
          </ul>
        </div>
      </div>

      {/* Evolutions */}
      <div>
        <h3 className={"pokedex__evolution-title"}>Evolutions</h3>
        <ul className={"pokedex__evolution-list"}>
          <li>{details.name}</li>
          {getEvolutionNames(evolution.chain).map((name) => {
            return <li key={name}>{name}</li>;
          })}
        </ul>
      </div>
    </aside>
    <Pokeball pokemonDetails={pokemonDetails}/>
    </div>
  );
};

export default PokemonDetails;
