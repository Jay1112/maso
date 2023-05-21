import { Box, Text } from "@chakra-ui/react";

function BottomBar(){
    return (
        <>
            <Box    width='100%'
                    display='flex'
                    alignItems='stretch'
                    justifyContent='center'
                    flex='0.05'>
                    <Box flex={1}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'>
                        <Text   align='center' 
                                padding='0 0.25rem'
                                margin='0.25rem 0'
                                width='100%'
                                fontWeight='bold'
                                letterSpacing='0.1rem'
                                >
                            Version 1.0.0
                        </Text>
                    </Box>
            </Box>
        </>
    )
}

export default BottomBar;