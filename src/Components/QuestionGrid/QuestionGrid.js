import { Box } from '@chakra-ui/react';

function QuestionGrid(props){
    return (
        <>
            <Box    width='95%'
                    display='flex'
                    alignItems='stretch'
                    justifyContent='center'
                    flex='0.6'
                    >
                    <Box flex={1}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'>
                        { props?.level?.level_content &&
                          <>
                          { props?.level?.level_content }
                          </> 
                        }
                    </Box>
            </Box>
        </>
    )
}

export default QuestionGrid;