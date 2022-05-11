import { useState } from "react"
import { FormControl, FormLabel, Input, Heading, Button, Center } from "@chakra-ui/react"
import loginServices from "../services/loginServices"

export default function LoginForm () {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [show, setShow] = useState(false)
  
    const handleClick = () => setShow(!show)
  
    const handleUsernameChange = (e) => {
        const username = e.target.value
        setUsername(username)
    }

    const handlePasswordChange = (e) => {
        const password = e.target.value
        setPassword(password)
    }

    const handleLogin = async (loggingUser) => {
        const user = await loginServices.loginPost({ username, password })
        window.localStorage.setItem(        
            'loggedCookbookUser', 
            JSON.stringify(user)      
        ) 
        setUser(user)
        setUsername('')
        setPassword('')
    }

    return(    
        <>
            <FormControl isRequired>
            <FormLabel htmlFor='username'>Username</FormLabel>
            <Input  value={username} 
                    onChange={handleUsernameChange} 
                    placeholder='username' />  
            </FormControl> 
            <FormControl isRequired>    
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input
                value={password}
                onChange={handlePasswordChange}
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='*******'
            />
            <Button h='1.75rem' size='sm' onClick={handleClick}>
             {show ? 'Hide' : 'Show'}
            </Button>
            <Button onClick={() => handleLogin({username, password})}>Log in</Button>
            </FormControl>                    
        </>
    )
}