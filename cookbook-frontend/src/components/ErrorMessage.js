import {Alert, AlertIcon, AlertDescription, AlertTitle} from '@chakra-ui/react'


export default function ErrorMessage({display}){
    return(
        <Alert status='error' d={display}>
        <AlertIcon />
        <AlertTitle>Missing fields!</AlertTitle>
        <AlertDescription>All fields are required.</AlertDescription>
        </Alert>
    )
}
