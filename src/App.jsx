import { Pokedex, Form } from './components'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [pokemonData, setPokemonData] = useState([])
  const [submittedText, setSubmittedText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  return (
    <div>
      <Form
        setPokemonData={setPokemonData}
        setSubmittedText={setSubmittedText}
        submittedText={submittedText}
        setLoading={setLoading}
        setError={setError}
      />
      <Pokedex pokemonData={pokemonData} loading={loading} error={error} />
    </div>
  )
}

export default App
