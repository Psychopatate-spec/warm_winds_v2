import { useState } from 'react'
import SearchBar from './components/SearchBar'
import getWeather from './getWeather'
import './App.css'

function App() {

  const [city, setCity] = useState("")
  const [data, setData] = useState("")

  async function handleSearch(input) {
    setCity(input)
    const weatherData = await getWeather(input)
    setData(weatherData)
  }

  return (
    <div className='App'>
      <SearchBar handleSearch={handleSearch} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default App
