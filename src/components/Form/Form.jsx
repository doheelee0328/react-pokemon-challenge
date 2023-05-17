import React, { useState, useEffect } from 'react'
import './style.css'
const Form = ({
  setPokemonData,
  setSubmittedText,
  submittedText,
  setLoading,
  setError,
}) => {
  const [pokemonName, setPokemonName] = useState('')

  const handleInputChange = (e) => {
    setPokemonName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedText(pokemonName)
    setPokemonName('')
  }

  useEffect(() => {
    const fetchData = async (submittedText) => {
      if (submittedText !== '') {
        setLoading(true)
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${submittedText}`
          )
          if (response.ok) {
            const data = await response.json()
            setPokemonData([data])
            setTimeout(() => {
              setLoading(false)
            }, 500)
          } else {
            setError(`Cannot find ${submittedText}`)
          }
        } catch (error) {
          setError('An error occurred while fetching Pokemon data.')
        }
      }
    }
    fetchData(submittedText)
  }, [submittedText, setPokemonData])

  return (
    <div>
      <form onSubmit={handleSubmit} className='form-container'>
        <label className='type-pokemon'>Enter a Pokémon name</label>
        <input
          type='text'
          id='pokemonInput'
          value={pokemonName}
          onChange={handleInputChange}
        />
        <button type='submit' className='button'>
          Search
        </button>
      </form>
    </div>
  )
}

export default Form
