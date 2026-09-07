import axios from "axios";

const api = axios.create({
  baseURL: "https://stocknep.product-api.hamroyouthit.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;