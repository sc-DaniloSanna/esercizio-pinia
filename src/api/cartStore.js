import axios from "axios";


export default {
postCart(data) {
    const objectInJson = JSON.stringify(data);
    return axios.post(
      import.meta.env.VITE_DB_URL + "/orders",
      objectInJson
    );
  }
}