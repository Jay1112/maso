import { Box, Text } from "@chakra-ui/react";
import TopBar from "../../Components/TopBar/TopBar";
import MiddleBar from "../../Components/MiddleBar/MiddleBar";
import BottomBar from "../../Components/BottomBar/BottomBar";

function HomePage(){
    return (
        <Box    textAlign="center"
                width='100%'
                fontSize="xl"
                display='flex'
                alignItems='center'
                flexDirection='column'
                justifyContent='flex-start'
                className="fade-in"
                flex='1'>
            <TopBar />
            <MiddleBar />
            <BottomBar />
        </Box>
    );
}

export default HomePage;