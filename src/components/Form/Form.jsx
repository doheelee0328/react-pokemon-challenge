import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'

const Form = ({
  setPokemonData,
  setSubmittedText,
  submittedText,
  setLoading,
  setError,
  setShowError,
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
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${submittedText}`
          )
          if (response.status === 200) {
            // const data = await response.json()
            setPokemonData([response.data])
            setTimeout(() => {
              setLoading(false)
            }, 500)
            setShowError(false)
          } else {
            setError(`Cannot Find ${submittedText}`)
            setShowError(true)
          }
        } catch (error) {
          setError('An error occurred while fetching Pokemon data.')
          setShowError(true)
        }
      }
    }
    fetchData(submittedText)
  }, [submittedText, setPokemonData])

  return (
    <div>
      <form onSubmit={handleSubmit} className='form-container'>
        <p className='type-pokemon'>Enter a Pokémon name</p>
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
