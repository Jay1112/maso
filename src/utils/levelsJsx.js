import { Box, Text } from "@chakra-ui/react";

function GeneralText({ children }){
    return (
        <Box>
           <Text    align='center' 
                    fontSize={'2rem'}
                    padding='0 0.25rem'
                    margin='0.25rem 0'
                    width='100%'
                    fontWeight='bold'
                    letterSpacing='0.1rem'>
                { children }
            </Text>
        </Box>
    )
}

export const levelJsxData = [
    (
        <GeneralText>
            4,&nbsp;8,&nbsp;16,&nbsp;?
        </GeneralText>
    ),
    (
        <GeneralText>
            2 &nbsp; + &nbsp; 2  &nbsp; x &nbsp; 2 &nbsp; = &nbsp; ?
        </GeneralText>
    ),
    (
        <GeneralText>
            &#9634; &nbsp; +  &nbsp; &#9634; &nbsp; =  &nbsp; 8 &nbsp;<br/>
            &#9711; &nbsp; +  &nbsp; &#9634; &nbsp; =  &nbsp; 14 <br/>
            &#9699; &nbsp; +  &nbsp; &#9634; &nbsp; =  &nbsp; 11 <br/>
            &nbsp; &nbsp; &#9699; &nbsp;  =  &nbsp; ? <br/>
        </GeneralText>
    ),
    (
        <GeneralText>
            6 &nbsp; =  &nbsp; 30 <br/>
            3 &nbsp; =  &nbsp; 15 <br/>
            7 &nbsp; =  &nbsp; 35 <br/>
            2 &nbsp; =  &nbsp; ? &nbsp; <br/>
        </GeneralText>
    ),
    (
        <GeneralText>
            4,&nbsp;11,&nbsp;18,&nbsp;?
        </GeneralText>
    ),
    (
        <GeneralText>
            5 &nbsp; + &nbsp; 5  &nbsp; x &nbsp; 5 &nbsp; - &nbsp; 5 &nbsp; = &nbsp; ?
        </GeneralText>
    ),
    (
        <GeneralText>
            2 &nbsp; x &nbsp; 2 &nbsp; Grid &nbsp; = &nbsp; 5 <br/>
            3 &nbsp; x &nbsp; 3 &nbsp; Grid &nbsp; = &nbsp; ? <br/>
        </GeneralText>
    )
];