import axios from "axios";

export const api = axios.create({
<<<<<<< HEAD
    baseURL: 'http://localhost:8000',
=======
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/api`,
>>>>>>> cfbec9d215bee51239e67d80f68cf8ee92b4c20f
});