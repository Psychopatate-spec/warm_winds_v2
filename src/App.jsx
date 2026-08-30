import { useState } from 'react'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {

  const [city, setCity] = useState("")

  function handleSearch(input) {
    setCity(input)
  }

  return (
    <div className='App'>
      <SearchBar handleSearch={handleSearch} />
      {city}
    </div>
  )
}

export default App
