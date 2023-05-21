import { Box, Text } from "@chakra-ui/react";

function GridItem(props){
    return (
        <Box    cursor='pointer'
                width={props?.width}
                height={props?.height}
                background={ props?.isDone ? 'teal' : 'blackAlpha.700' }
                borderRadius={'5px'}
                flex={props?.flex ? props?.flex : null}
                _hover={{
                    background: "linear-gradient(135deg, #F59E0B, #D97706, #FCD34D)",
                    color:'black'
                }}
                onClick={(e)=>{ 
                    if(props?.buttonClickListener){
                        props?.buttonClickListener(props?.item?.level_id);
                    }
                 }}
                margin='0.5rem'
                display='flex'
                alignItems='center'
                justifyContent='center'>
                <Text   align='center'
                        fontSize='2xl' 
                        padding='0 0.25rem'
                        margin='0.25rem 0'
                        width='100%'
                        fontWeight={500}
                        letterSpacing='0.1rem'
                        >
                        {props?.item?.level_name}
                </Text>
        </Box>
    );
}

export default GridItem;