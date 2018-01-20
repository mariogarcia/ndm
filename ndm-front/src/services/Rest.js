import axios from 'axios'

export const Rest = axios.create({
    timeout: 1000,
    headers: {
        'Accept': 'application/json'
    }
});
