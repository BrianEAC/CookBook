import axios from 'axios'

const recipePost = (name, ingredients, description, isVegan) => {
    const recipeObject = {
        "name": name,
        "description": description,
        "ingredients": ingredients,
        "isVegan": !isVegan
    }
    axios.post('http://localhost:8000/api/recipes', recipeObject)
}

export default {recipePost}