import axios from 'axios';
export const production = true
axios.defaults.baseURL = production ? 'https://backend.globalchat.us/api/' : "http://localhost:1337/api/"

export default axios