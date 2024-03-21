import axios from "axios";
const customFetch = axios.create({
    baseURL:'http://10.0.2.2:5100/api/v1'
})
export default customFetch;