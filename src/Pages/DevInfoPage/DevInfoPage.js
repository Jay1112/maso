import { Box, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import TopTitle from "../../Components/TopTitle/TopTitle";
import { useKey } from "react-use";
import React, { useState, useEffect } from "react";
import useAppContext from "../../context/useAppContext";
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import './DevInfoPage.css';

function DevInfoPage(){
    const navigate = useNavigate();
    const {state} = useAppContext();
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
                className='fade-in'
                flex='1'>
                <TopTitle   route='/'
                            text='Dev-Info'
                            textStyle={{
                                fontSize : '2rem',
                                align : 'left'
                            }} />
                <Box    width={'100%'}
                        flex={1}
                        padding={'0.5rem'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                >
                    <Box    display={'flex'}
                            width={'100%'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            flexDirection={'column'}>
                        <Box    display={'flex'}
                                width={'100%'}
                                position={'relative'}
                                alignItems={'center'}
                                padding={'3rem 0'}
                                justifyContent={'center'}>
                            <Icon   as={AiFillGithub} 
                                    boxSize={20}
                                    borderRadius={'0.5rem'}
                                    zIndex={1}
                                    position={'absolute'}
                                    top='50%'
                                    cursor={'pointer'}
                                    onClick={()=>{
                                        window.open("https://github.com/Jay1112", "_blank");
                                    }}
                                    left='50%'
                                    transform={'translate(-50%,-50%)'}
                                    className="moveAnimationForLeft"/>
                            <img    width={'50%'}
                                    style={{
                                        borderRadius : '50%',
                                    }}
                                    src="https://jelly-t3.netlify.app/static/media/dev.384e93a5835f1a2ec336.jpeg">
                            </img>
                            <Icon   as={AiFillLinkedin} 
                                    boxSize={20}
                                    borderRadius={'0.5rem'}
                                    zIndex={1}
                                    cursor={'pointer'}
                                    position={'absolute'}
                                    top='50%'
                                    left='100%'
                                    onClick={()=>{
                                        window.open("https://www.linkedin.com/in/jay-patel-93b394155/", "_blank");
                                    }}
                                    transform={'translate(-50%,-50%)'}
                                    className="moveAnimationForRight"
                                    />
                        </Box>
                    </Box>
                    
                </Box> 
        </Box>
    );
}

export default DevInfoPage;