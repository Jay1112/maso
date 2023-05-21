import { Box, Text } from "@chakra-ui/react";
import MenuItem from "../MenuItem/MenuItem";
import { menuTabsList } from "../../utils/menuTabs";

function MiddleBar(){
    return (
        <>
            <Box    width='100%'
                    display='flex'
                    alignItems='center'
                    flexDirection='column'
                    justifyContent='center'
                    flex='0.85'>
                    <Box    padding='1rem 0.5rem'
                            width='100%'
                            display='flex'
                            alignItems='center'
                            justifyContent='space-evenly'
                            flexDirection='column'
                            flex={0.8}>
                        {
                            menuTabsList.map((item,index)=>{
                                return <MenuItem key={index} item={item} />
                            })
                        }
                        
                    </Box>
            </Box>
        </>
    )
}

export default MiddleBar;