import axios from "axios";

const BASE_URL = 'https://restcountries.com/v3.1'

axios.defaults.baseURL = BASE_URL;

const getAllCountries = () => {
  try {
    const data = axios.get('/all')
    return data;
  } catch (error) {
    return error
  }
}

const getCountryByCode = (code) => {
  try {
    const data = axios.get(`/alpha/${code}`)
    return data;
  } catch (error) {
    return error
  }
}


export {getAllCountries, getCountryByCode}
