import axios from 'axios';

export default axios.create({
    baseURL: 'https://pets-project-backend.onrender.com/api'
});