import axios from 'axios';

const axiosdefaultpath = axios.create({
   baseURL: "https://mighty-atoll-69969.herokuapp.com"
})

export default axiosdefaultpath;