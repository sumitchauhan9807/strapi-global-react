import axios from 'axios';
export const production = true
const mainAxios = axios.create({
  baseURL: production ? 'https://backend.globalchat.us/api/' : "http://localhost:1337/api/"
});
export const servicesAxios = axios.create({
  baseURL: production ? 'https://services.global-world.us/api/' : "http://localhost:3030/api/"
});
// axios.defaults.baseURL = production ? 'https://backend.globalchat.us/api/' : "http://localhost:1337/api/"

export default mainAxios