import axios from 'axios';
export const production = true
axios.defaults.baseURL = production ? 'https://backend.globalchat.us/api/' : "http://localhost:1337/api/"



axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  console.log("res i shere")
  return response
}, function(error) {
  return Promise.reject(error)
})
export default axios