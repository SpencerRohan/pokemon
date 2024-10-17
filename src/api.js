import getEvolutionChainId from "./utils/getEvolutionChainId";

const base = "https://pokeapi.co/api/v2";

export const fetchAllPokemon = () => {
  return fetch(`${base}/pokemon/?limit=151`).then((response) =>
    response.json()
  );
};

export const fetchPokemonSpeciesByName = (name) => {
  return fetch(`${base}/pokemon-species/${name}`).then((response) =>
    response.json()
  );
};

export const fetchPokemonDetailsByName = (name) => {
  return fetch(`${base}/pokemon/${name}`).then((response) => response.json());
};

export const fetchEvolutionChainById = (id) => {
  return fetch(`${base}/evolution-chain/${id}`).then((response) =>
    response.json()
  );
};

export const fetchAllByName = async (name) => {
  try {
    const [speciesData, detailsData] = await Promise.all([
      fetchPokemonSpeciesByName(name),
      fetchPokemonDetailsByName(name),
    ]);

    const chainId = getEvolutionChainId(speciesData.evolution_chain.url);
    const evolutionData = await fetchEvolutionChainById(chainId);

    return {
      species: speciesData,
      details: detailsData,
      evolution: evolutionData,
    };
  } catch (error) {
    console.error("Error catching your pokemon data:", error);
    throw error;
  }
};
