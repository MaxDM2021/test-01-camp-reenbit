import  axios  from "axios";


export const instance = axios.create ({
    baseURL: 'https://pets-project-backend.onrender.com/api',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });