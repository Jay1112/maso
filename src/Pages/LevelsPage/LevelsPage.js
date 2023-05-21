import { useState, useEffect } from "react";
import { useKey } from "react-use";
import { Box } from "@chakra-ui/react";
import TopTitle from "../../Components/TopTitle/TopTitle";
import LevelsGrid from "../../Components/LevelsGrid/LevelsGrid";
import { useNavigate } from "react-router-dom";

function LevelPage(){
    const navigate = useNavigate();
    const [isKeyPressed, setIsKeyPressed] = useState(false);

    useKey('Backspace', () => setIsKeyPressed(true));

    useEffect(()=>{
        if(isKeyPressed){
            navigate('/');
        }
    },[isKeyPressed]);

    return (
        <Box    textAlign="center"
                width='100%'
                fontSize="xl"
                display='flex'
                alignItems='center'
                flexDirection='column'
                justifyContent='center'
                overflow={'scroll'}
                className="fade-in"
                flex='1'>
                <TopTitle   route='/'
                            text='Levels'
                            textStyle={{
                                fontSize : '2rem',
                                align : 'left'
                            }} />
                <LevelsGrid />
        </Box>
    );
}

export default LevelPage;