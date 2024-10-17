import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Components: Pokeball
 */
const Pokeball = ({ pokemonDetails }) => {
  const [showPokemon, setShowPokemon] = useState(false);
  const pokeballRef = useRef(null);

  const resetAnimation = useCallback(() => {
    if (pokeballRef.current) {
      // Debug: log to check if the ref is correctly attached
      console.log("Resetting animation");
      pokeballRef.current.classList.remove("animate");
      void pokeballRef.current.offsetWidth; // Force reflow
      pokeballRef.current.classList.add("animate");
    }
  }, []);

  useEffect(() => {
    resetAnimation();
    setShowPokemon(false);
  }, [pokemonDetails, resetAnimation]);

  if (!pokemonDetails) {
    return null;
  }

  const { details } = pokemonDetails;

  const onClick = () => {
    setShowPokemon(true);
  };

  return (
    <div className="pokeball__wrapper">
      <div className="pokeball__shield" />
      <button ref={pokeballRef} onClick={onClick} className="animate">
        <img
          alt="Pokeball"
          src={
            showPokemon
              ? details.sprites.front_default
              : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          }
        />
      </button>
    </div>
  );
};

export default Pokeball;
