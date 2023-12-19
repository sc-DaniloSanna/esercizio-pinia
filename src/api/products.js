// import axios from 'axios'
import { products } from '../../db.json'

export default {
  getProducts () {
      return products
      // return axios.get(import.meta.env.VITE_DB_URL + '/products', data)

  }
}
