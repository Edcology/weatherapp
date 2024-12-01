import { useEffect, useState } from "react"
import Weather from "./components/Weather"
import fetchWeather from "./components/fetchWeather"
import Dashboard from "./components/Dashboard"
import axios from "axios"



const App = () => {

  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState("")
  const [error, setError] = useState("")
  const [errors, setErrors] = useState("")
  const [location, setLocation] = useState(null)
  const [change, setChange] = useState(false)
  

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeather(city)
        setWeather(data)
        setError("")
      } catch (err) {

        setError("Failed to fetch weather data. Please try again.")
        
      }

    }
    getWeather()
  }, [city])

  useEffect(() => {
    const getLocation = async () => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          (position) => {
              setLocation({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude
              })
              setErrors("")
          },
          (error) => {
              setErrors(error.message)
          }
      )
    } else {
      setError("Geolocation is not supported by this browser")
    }
    }
    
    getLocation()
  }, [])

  useEffect(() => {
    const getCity = async () => {
      try{
        const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.latitude}&lon=${location.longitude}`)
        const data = response.data
        
        data && data.address && data.address.state ?
        setCity(data.address.state):
        setError("City not found")
        
      } catch (err) {
        setError("Error fetching city")
      }
  
    }
    getCity()
  }, [location, change])


  if (!weather || !weather.current) {  // Check for null or undefined weather.current
    return <div>No weather data available.</div>;
}
  
 
  return (
    <main className="px-6 bg-gray-300 flex flex-col md:flex-row gap-4">
      <Weather weather={weather} setCity={setCity} setChange={setChange} change={change} />
      <Dashboard weather={weather} />
    </main>
  )
}

export default App