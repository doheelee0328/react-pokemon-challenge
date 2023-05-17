import './style.css'
const Pokemon = ({ name, img, pokemonWeight, pokemonHeight }) => {
  return (
    <>
      <div className='pokemon-container'>
        <p className='pokemon-name'>{name}</p>
        <img className='pokemon-image' src={img} alt={name} />
        <div className='container-height-weight'>
          <p className='pokemon-height'>Height: {pokemonHeight}</p>
          <p className='pokemon-weight'>Weight: {pokemonWeight}</p>
        </div>
      </div>
    </>
  )
}

export default Pokemon
