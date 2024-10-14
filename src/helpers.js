import { production } from 'src/axios'
export const baseUrl = () => {
  return production ? 'https://backend.globalchat.us' : "http://localhost:1337"
}

export const constructQueryString = (fields) => {
  let str = ''
  fields.forEach((element,index) => {
    str += `populate[${index}]=${element}&`
  });
  return str
}