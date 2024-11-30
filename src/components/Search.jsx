import axios from "axios";


const Search = async (query) => {
    const api_key = '203c93015a9d4c4eb3a135800242811';
    const url = `https://api.weatherapi.com/v1/search.json?key=${api_key}&q=${query}`

    try {
        const response = await axios.get(url)
        return response.data
    } catch (err) {
        console.error(err);
        
    }
}

export default Search;