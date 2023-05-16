import './style.css'
const Pokemon = ({ name, type, image }) => {
  return (
    <>
      <div className='pokemon-container'>
        <h2 className='pokemon-name'>{name}</h2>
        <img src={image} alt='pokemon-image' className='pokemon-image' />
        <p className='pokemon-type'>Type:{type}</p>
      </div>
    </>
  )
}

export default Pokemon
