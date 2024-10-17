/**
 * Util: getEvolutionChainId
 *
 * Grabs evolution chain id from url
 */
const getEvolutionChainId = (url) => {
  const match = url.match(/\/evolution-chain\/(\d+)\//);
  return match ? Number(match[1]) : null;
};

export default getEvolutionChainId;
