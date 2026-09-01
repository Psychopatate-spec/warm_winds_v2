const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        if (!response.ok) {
            throw new Error(`HTTP ERROR! status: ${response.status}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error(`Fetch failed: ${error}`)
    }
}

export default getWeather