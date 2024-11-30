import axios from "axios"

const fetchWeather = async (city) => {
    const api_key = '203c93015a9d4c4eb3a135800242811';
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}&days=7&aqi=yes&alerts=no`

    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log(error);
        
    }
}

export default fetchWeather