import axios from 'axios'

import {SnackData} from '../Interafces/SnackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

const config={
  headers:{
    "Access-Control-Allow-Origin":"http://localhost:5000"
  }
}


export const getBurgers=()=>api.get<SnackData[]>('/burger', config)
export const getPizzas=()=>api.get<SnackData[]>('/pizza', config)
export const getDrinks=()=>api.get<SnackData[]>('/drink', config)
export const getSorvetes=()=>api.get<SnackData[]>('/ice-cream',config)

export default api
