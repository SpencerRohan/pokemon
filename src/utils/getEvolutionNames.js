/**
 * Util: getEvolutionNames
 *
 * Traverses evolution chain for names
 */
const getEvolutionNames = (chain) => {
  const names = [];

  const traverseChain = (evolution) => {
    names.push(evolution.species.name);

    if (evolution.evolves_to.length > 0) {
      evolution.evolves_to.forEach((nextEvolution) =>
        traverseChain(nextEvolution)
      );
    }
  };

  traverseChain(chain.evolves_to[0]);

  return names;
};

export default getEvolutionNames;
