import { Box,Button } from "@chakra-ui/react";
import { RepeatClockIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import TopTitle from "../../Components/TopTitle/TopTitle";
import { useKey } from "react-use";
import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import useAppContext from "../../context/useAppContext";
import { AppActions } from "../../context/constants";

function SettingPage(){
    const navigate = useNavigate();
    const {dispatch} = useAppContext();
    const [isResetPressed,setResetPressed] = useState(false);
    const [isKeyPressed, setIsKeyPressed] = useState(false);

    useKey('Backspace', () => setIsKeyPressed(true));

    useEffect(()=>{
        if(isKeyPressed){
            navigate('/');
        }
    },[isKeyPressed]);

    function onResetButtonClicked(){
        setResetPressed(true);
        dispatch({ type : AppActions.INIT_CURRENT_LEVEL,  payload : { current_level  : 1 } });
        dispatch({ type : AppActions.INIT_CURRENT_POINTS, payload : { current_points : 0 } });
        dispatch({ type : AppActions.SET_HINT_LEVELS, payload : { hintLevels : []} });
        setTimeout(()=>{
            setResetPressed(false);
            toast('Progress has been Reseted', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        },2000);
    }

    return (
        <Box    textAlign="center"
                width='100%'
                fontSize="xl"
                display='flex'
                alignItems='center'
                flexDirection='column'
                justifyContent='center'
                className='fade-in'
                flex='1'>
                <TopTitle   route='/'
                            text='Settings'
                            textStyle={{
                                fontSize : '2rem',
                                align : 'left'
                            }} />
                <Box    width={'100%'}
                        flex={1}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                >
                    {   !isResetPressed &&
                        <Button leftIcon={<RepeatClockIcon />} 
                            borderRadius={2}
                            size='lg'
                            bg={'blackAlpha.500'}
                            onClick={onResetButtonClicked}
                            variant='solid'>
                            Reset Progress
                        </Button> 
                    } 
                    {
                        isResetPressed && 
                        <Button isLoading
                                loadingText='Loading'
                                colorScheme='teal'
                                variant='outline'
                                spinnerPlacement='start'
                                
                        ></Button>
                    }
                </Box>
                   
        </Box>
    );
}

export default SettingPage;