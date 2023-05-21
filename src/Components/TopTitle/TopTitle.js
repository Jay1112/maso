import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Icon, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function TopTitle(props){
    const navigate = useNavigate();
    return (
        <>
            <Box    width='100%'
                    display='flex'
                    alignItems='stretch'
                    justifyContent='center'
                    flex='0.1'>
                    <Box padding='0 1rem'
                         display='flex'
                         alignItems='center'
                         justifyContent='center'>
                        <Icon   fontSize='2rem'
                                cursor='pointer' 
                                onClick={()=>{ 
                                    if(props?.route){
                                        navigate(props?.route) 
                                    }
                                }}
                                as={ChevronLeftIcon} />
                    </Box>
                    <Box flex={1}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'>
                        <Text   align={props?.textStyle?.align}
                                fontSize={props?.textStyle?.fontSize}
                                padding='0 0.25rem'
                                margin='0.25rem 0'
                                width='100%'
                                fontWeight='bold'
                                letterSpacing='0.1rem'
                                >
                            {props?.text}
                        </Text>
                    </Box>
            </Box>
        </>
    )
}

export default TopTitle;