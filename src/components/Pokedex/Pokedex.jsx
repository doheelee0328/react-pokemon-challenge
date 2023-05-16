import { pokemon } from '../PokemonList/PokemonList'
import Pokemon from '../Pokemon/Pokemon'
import './style.css'
const Pokedex = () => {
  return (
    <div className='card-container'>
      {pokemon.map(({ id, name, type, image }) => (
        <Pokemon key={id} name={name} type={type} image={image} />
      ))}
    </div>
  )
}

export default Pokedex
