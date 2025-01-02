import axios from 'axios';
export const production = true
const mainAxios = axios.create({
  baseURL: production ? 'https://backend.globalchat.us/api/' : "http://localhost:1337/api/"
});
export const servicesAxios = axios.create({
  // baseURL: production ? 'http://localhost:3030/api/' : "http://localhost:3030/api/",
  baseURL: production ? 'https://services.global-world.us/api/' : "http://localhost:3030/api/"

});
export const serviceBaseUrl = production ? 'https://services.global-world.us/' : "http://localhost:3030/"
// export const serviceBaseUrl = production ? 'http://localhost:3030/' : "http://localhost:3030/"

axios.defaults.baseURL = production ? 'https://backend.globalchat.us/api/' : "http://localhost:1337/api/"

export default mainAxios
//https://www.didww.com/_next/data/-_jUcQsYSuxzBJTIzmjdb/phone-numbers/all-phone-numbers/Argentina/Local.json
//https://www.didww.com/_next/data/-_jUcQsYSuxzBJTIzmjdb/phone-numbers/all-phone-numbers/India/Local.json
//https://www.didww.com/_next/data/BCc9OgRXEbF5LDB_YG2gE/phone-numbers/all-phone-numbers/Australia/Local.json