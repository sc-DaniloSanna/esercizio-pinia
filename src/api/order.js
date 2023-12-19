import axios from 'axios'

export default {
  sendOrder(data) {

    return axios.post(import.meta.env.VITE_DB_URL + '/orders', data)
  }
}
