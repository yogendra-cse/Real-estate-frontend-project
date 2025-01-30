import axios from "axios"
const apiRequest = axios.create(
    {
        baseURL: "https://backend-real-estate-unx4.onrender.com",
        withCredentials: true,
    }
)
export default apiRequest;