import React from 'react';
import {
  Center,
  VStack,
  Heading
} from '@chakra-ui/react';
import RecipeSubmitForm from './components/RecipeSubmitForm';



function App() {
  return (
  <>   
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
