import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { useKey } from "react-use";
import TopTitle from "../../Components/TopTitle/TopTitle";
import { useNavigate, useParams } from "react-router-dom";
import QuestionGrid from "../../Components/QuestionGrid/QuestionGrid";
import KeyBoard from "../../Components/Keyboard/Keyboard";
import { levels } from "../../utils/levelsData";
import { useEffect } from "react";

function SingleLevelPage(){
    const navigate = useNavigate();
    const {id} = useParams();
    const level = levels?.at(id-1) ? levels?.at(id-1) : null ;
    const [isKeyPressed,setIsKeyPressed] = useState(false);
 
    useKey('Backspace', () => setIsKeyPressed(true));

    useEffect(()=>{
        if(isKeyPressed){
            navigate('/levels');
        }
    },[isKeyPressed]);

    useEffect(()=>{
        if(!level){
            navigate('/levels');
        }
    },[level])

    return (
        <Box    textAlign="center"
                width='100%'
                fontSize="xl"
                display='flex'
                alignItems='center'
                flexDirection='column'
                justifyContent='flex-start'
                flex='1'
                className="fade-in"
                >
                <TopTitle   route='/levels'
                            text={`Level ${id} `}
                            textStyle={{
                                fontSize : '2rem',
                                align : 'left'
                            }} />
                <QuestionGrid level={level}/>
                <KeyBoard level={level} />
        </Box>
    );
}

export default SingleLevelPage;