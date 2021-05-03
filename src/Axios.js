import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://reactlearn-tinder-backend.herokuapp.com/'
})

export default instance;