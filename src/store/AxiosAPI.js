import axios from 'axios'

const AxiosIns = axios.create({
    baseURL: 'http://localhost:3007',
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    },

})
export default AxiosIns

