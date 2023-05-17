// import { pokemon } from '../PokemonList/PokemonList'

import { Pokemon } from '..'
import './style.css'

const Pokedex = ({ pokemonData, loading }) => {
  return (
    <div>
      {/* {error && <p>{error}</p>} */}
      {loading ? (
        <div>
          <p className='loading'>Loading...</p>
        </div>
      ) : pokemonData.length ? (
        pokemonData.map((pokemon, index) => (
          <Pokemon
            key={index}
            name={pokemon.name}
            img={pokemon.sprites.front_default}
            pokemonHeight={pokemon.height}
            pokemonWeight={pokemon.weight}
          />
        ))
      ) : (
        <p className='no-pokemon'>No pokemon yet, please submit a pokemon!</p>
      )}
    </div>
  )
}

export default Pokedex
