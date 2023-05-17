import { Pokedex, Form } from './components'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [pokemonData, setPokemonData] = useState([])
  const [submittedText, setSubmittedText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showError, setShowError] = useState(false)

  return (
    <div>
      <Form
        setPokemonData={setPokemonData}
        setSubmittedText={setSubmittedText}
        submittedText={submittedText}
        setLoading={setLoading}
        setError={setError}
        setShowError={setShowError}
      />

      <Pokedex pokemonData={pokemonData} loading={loading} />
      {showError && <p className='error'>{error}</p>}
    </div>
  )
}

export default App
