import axios from "axios"

const loginPost = async user => {
    const response = await axios.post('http://localhost:8000/api/recipes', user)
    return response.data
}


export default {loginPost}