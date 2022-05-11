import React from 'react';
import {
  Center,
  VStack,
  Heading
} from '@chakra-ui/react';
import RecipeSubmitForm from './components/RecipeSubmitForm';
import LoginForm from './components/LoginForm';



function App() {
  return (
  <>
    <Center> 
    <Heading>Login</Heading>
    </Center> 
    <Center> 
    <VStack
            w='30vh'
            spacing={4}
            align='stretch'>
    <LoginForm />
    </VStack>
    </Center>  
    <Center>
      <Heading>Cookbook App</Heading>
    </Center>    
    <Center>
      <VStack
            w='100vh'
            spacing={4}
            align='stretch'>
        <RecipeSubmitForm />
      </VStack>
    </Center>
    </>
  );
}

export default App;
