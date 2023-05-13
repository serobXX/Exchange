import axios from "axios";

const Inctance = axios.create({
  baseURL: process.env["REACT_APP_BASE_URL"],
  headers: { apikey: process.env["REACT_APP_API_KEY"] },
});

export default Inctance;