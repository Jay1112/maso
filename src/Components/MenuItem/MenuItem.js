import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function MenuItem(props){
    const navigate = useNavigate();
    return (
        <Box    cursor='pointer'
                flex={0.15}
                background='teal.500'
                _hover={{
                    border:'1px solid transparent',
                    background: "linear-gradient(to right, #F59E0B, #D97706, #FCD34D)",
                    boxShadow:'0px 0px 5px 5px rgba(255,255,255,0)'
                }}
                onClick={(e)=>{ 
                    if(props?.item?.route){
                        navigate(props?.item?.route);
                    }else if(props?.item?.link){
                        window.open(props?.item?.link, "_self");
                    }
                 }}
                margin='0.5rem 0'
                borderRadius='5px'
                width='95%'
                border='1px solid transparent'
                display='flex'
                alignItems='stretch'
                justifyContent='center'>
            <Box    
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    padding='0 1rem'>
                { props?.item?.icon } 
            </Box>
            <Box    
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    padding='0 0.25rem'
                    flex={1}>
                <Text   align='left'
                        fontSize='2xl' 
                        padding='0 0.25rem'
                        margin='0.25rem 0'
                        width='100%'
                        fontWeight={500}
                        letterSpacing='0.1rem'
                        >
                        {props?.item?.text}
                </Text>
            </Box>
        </Box>
    );
}

export default MenuItem;