import axios from 'axios'

let token = null

const setToken = newToken => {  token = `bearer ${newToken}`}

const recipePost = async (name, ingredients, description, isVegan) => {
    const config = {    
        headers: { Authorization: token },  
    }
    const recipeObject = {
        "name": name,
        "description": description,
        "ingredients": ingredients,
        "isVegan": !isVegan
    }
    const res = await axios.post('http://localhost:8000/api/recipes', recipeObject, config)
    return res.data
}

export default {recipePost, setToken}