import { React, useState } from 'react';
import ErrorMessage from './ErrorMessage';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    ButtonGroup,
    Input,
    Textarea,
    Switch
  } from '@chakra-ui/react';
import recipeServices from '../services/recipeServices';



const RecipeSubmitForm = () => {

  const [recipeName, setRecipeName] = useState('')
  const [recipeIngredients, setRecipeIngredients] = useState('')
  const [recipeInstructions, setRecipeInstructions] = useState('')
  const [isVegan, setIsVegan] = useState(false)
  const [isError, setError] = useState('none')



  const handleNameChange = (e) => {
    const name = e.target.value
    setRecipeName(name)
  }

  const handleIngredientsChange = (e) => {
    const ingredients = e.target.value
    setRecipeIngredients(ingredients)
  }

  const handleInstructionsChange = (e) => {
    const instructions = e.target.value
    setRecipeInstructions(instructions)
  }

  const handleVeganChange = () => {
    setIsVegan(!isVegan) 
  }

  const postRecipe = (name, ingredients, instructions, isVegan) => {
    if(!name || !ingredients || !instructions) {
      setError('')
      setTimeout(() => setError('none'), 5000)
      return
    }
    setRecipeIngredients('')
    setRecipeName('')
    setRecipeInstructions('')
    recipeServices.recipePost(name, ingredients, instructions, isVegan)
  }

  return(
    <>
      <FormControl isRequired>
        <FormLabel htmlFor='recipe-name'>Recipe name</FormLabel>
        <Input  value={recipeName} 
                id='recipe-name' 
                onChange={handleNameChange} 
                placeholder='Recipe name' />  
        </FormControl> 
        <FormControl isRequired>    
        <FormLabel htmlFor='recipe-ingredients'>Ingredients</FormLabel>
        <Textarea value={recipeIngredients} 
                  id='recipe-ingredients' 
                  onChange={handleIngredientsChange} 
                  placeholder='Ingredients' ></Textarea>
        </FormControl> 
        <FormControl isRequired>          
        <FormLabel htmlFor='recipe-instructions'>Instructions</FormLabel>
        <Textarea value={recipeInstructions} 
                  id='recipe-instructions' 
                  onChange={handleInstructionsChange} 
                  placeholder='Instructions' ></Textarea>
        </FormControl> 
        <FormControl>
        <FormLabel htmlFor='recipe-is-vegan' 
                   placeholder='Is it vegan?'>Is it vegan?</FormLabel>
        </FormControl>            
        <Switch id='recipe-is-vegan' 
                onChange={() => handleVeganChange()} 
                isChecked={!isVegan}></Switch>
        <div>
          <Button onClick={() => postRecipe(recipeName, recipeIngredients, recipeInstructions, isVegan)} 
                  colorScheme='blue'>Submit</Button>
        </div>     
        <ErrorMessage display={isError} />
      
    </>
  )
}
export default RecipeSubmitForm