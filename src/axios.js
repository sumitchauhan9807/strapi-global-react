import axios from 'axios';
const production = true
axios.defaults.baseURL = production ? 'http://localhost:1337/api/' : "http://localhost:1337/api/"



// axios.interceptors.request.use((config) => {
//   config.headers.authorization = `Bearer ${store.state.core.token}`
//   if(config.loadingMesssage){
//     store.commit('loadingText',config.loadingMesssage)
//   }
//   store.commit('loading',true)
//   return config
// }, (error) => {
//   store.commit('loading',true)
//   return Promise.reject(error)
// })

// axios.interceptors.response.use((response) => {
//   store.commit('loading',false)
//   store.commit('loadingText','MAZU Loading')

//   return response
// }, function(error) {
//   store.commit('loading',false)
//   store.commit('loadingText','MAZU Loading')

//   return Promise.reject(error)
// })
export default axios