import { Box, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useKey } from "react-use";
import { useNavigate } from "react-router-dom";

function PageNotFound(){
    const [isKeyPressed,setIsKeyPressed] = useState(false);
    const navigate = useNavigate();
    useKey('Backspace', () => setIsKeyPressed(true));

    useEffect(()=>{
        if(isKeyPressed){
            navigate('/');
        }
    },[isKeyPressed]);
    return (
        <Box    textAlign="center"
                // border={'1px solid red'}
                width='100%'
                fontSize="xl"
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                flex='1'>
            <Text   align='center' 
                    fontSize='2xl'
                    margin='0.25rem 0'
                    width='100%'
                    fontWeight='bold'
                    letterSpacing='0.1rem'>
                Page Not Found
            </Text>
            <Text   align='center' 
                    fontSize='1xl'
                    margin='0.25rem 0'
                    width='100%'
                    color='blue.400'
                    letterSpacing='0.1rem'>
                <Link to='/'>Go to Home</Link>
            </Text>
        </Box>
    );
}

export default PageNotFound;