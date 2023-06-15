import React, { useState } from 'react';
import { Box, Button, Icon, Text } from '@chakra-ui/react';
import { digitsDataList } from '../../utils/TextButtons';
import GridItem from '../GridItem/GridItem';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { TiTick } from 'react-icons/ti';
import { FaBackspace } from 'react-icons/fa';
import useAppContext from '../../context/useAppContext';
import { AppActions } from '../../context/constants';
import { useNavigate } from 'react-router-dom';
import { levels } from '../../utils/levelsData';
import HintAnswer from '../HintAnswerModal/HintAnswer';
import WrongAnswer from '../WrongAnswer/WrongAnswer';
import { toast } from 'react-toastify';

function RowKeys(props){

    function onDigitKeyClicked(value){
        if(props?.onDigitKeyClicked){
            props?.onDigitKeyClicked(value);
        }
    }

    return (
        <Box width='100%'
            display='flex'
            alignItems='center'
            justifyContent='center'
            flex={1}>
        {
            digitsDataList.map((item,index)=>{
                return (
                    <React.Fragment key={item?.key}>
                    {
                        item?.row_id === props?.row_id &&
                        <GridItem   item={{
                                        level_id : item?.button_id,
                                        level_name : item?.button_text
                                    }} 
                                    buttonClickListener={onDigitKeyClicked}
                                    width='50px'
                                    height='50px'
                                    flex={1}
                        />
                    }
                    </React.Fragment>
                );
            })
        }
        </Box>
    )
}

function KeyBoard(props){
    const total_levels = levels.length;
    const [isHintPopupOpened,setHintPopupOpened] = useState(false);
    const [isAnswerPopupOpened,setAnswerPopupOpened] = useState(false);
    const navigate = useNavigate();
    const {dispatch,state} = useAppContext();
    const [answer,setAnswer] = useState('');

    function onDigitKeyClicked(value){
        if(value <= '9'  && value >= '0' && answer.length < 6){
            setAnswer(answer + value);
        }
    }

    function checkInHintLevels(){
        const check = state.hintLevels.find((item)=> item === props.level.level_id );
        if(check){
            return true;
        }
        return false;
    }

    function onTickMarkButtonClicked(){
        if(props?.level?.level_answer === answer){
            const isExist = checkInHintLevels();

            if(props?.level?.level_id >= state.current_level){
                dispatch({ type : AppActions.SET_CURRENT_LEVEL });
            }

            if(!isExist && props?.level?.level_id >= state.current_level){
                dispatch({ type : AppActions.SET_CURRENT_POINTS, 
                    payload : {
                                 level_points : props?.level?.level_points 
                             } 
                 });
            }
            
            let next_route = '/';
            if( props?.level && props?.level?.level_id + 1 <= total_levels){
                next_route = `/level/${props?.level?.level_id + 1}`
            }
            navigate('/result',{
                state : { 
                    level_points : isExist ? 0 : props?.level?.level_points,
                    back_route : '/',
                    next_route
                }
            });
        }else{
            setAnswerPopupState(true);
        }
    }

    function onBackSpaceButtonClicked(){
        if(answer){
            const updatedAnswer = answer.substring(0,answer.length - 1);
            setAnswer(updatedAnswer);
        }
    }

    function setHintPopupState(value){
        setHintPopupOpened(value);
    }

    function setAnswerPopupState(value){
        setAnswerPopupOpened(value);
    }

    function onHintButtonClicked(){
        console.log('Hint button clicked');
        const isExist = checkInHintLevels();
        let updatedArr = isExist ? [...state?.hintLevels]  :  [...state?.hintLevels, props?.level?.level_id];
        dispatch( { type : AppActions.SET_HINT_LEVELS, payload : { hintLevels : updatedArr } } );
        setHintPopupOpened(true);
        toast('You can not Get points for this Level', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const buttonStyle = {
        margin : '0 0.5rem'
    }

    return (
        <>
            <Box    width='95%'
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    flex='0.3'>
                <Box    width='100%'
                        padding={'0 0.5rem'}
                        margin={'0.25rem 0'}
                        display='flex'
                        alignItems='stretch'
                        justifyContent='center'
                        flex={1}>
                    <Box    flex={1}
                            padding={'0.5rem 0'}
                            display='flex'
                            alignItems='stretch'
                            justifyContent='center'>
                        <Text   align={'center'}
                                width={'100%'}
                                borderRadius={5}
                                backgroundColor='blackAlpha.500'
                                padding={'0.75rem 0.5rem'}
                                letterSpacing={'0.2rem'}>
                            { answer }
                        </Text>
                    </Box>
                    <Box display={'flex'}
                         alignItems={'center'}
                         padding={'0 0.25rem'}
                         justifyContent={'center'}>
                        <Button colorScheme='teal' 
                                variant='outline'
                                style={buttonStyle}
                                isDisabled={ answer ? false : true }
                                onClick={onTickMarkButtonClicked}>
                            <Icon boxSize={5} as={TiTick} />
                        </Button>
                        <Button colorScheme='teal' 
                                variant='outline'
                                style={buttonStyle}
                                isDisabled={ answer ? false : true }
                                onClick={onBackSpaceButtonClicked}>
                            <Icon boxSize={5} as={FaBackspace} />
                        </Button>
                        <Button colorScheme='teal' 
                                variant='outline'
                                style={buttonStyle}
                                onClick={onHintButtonClicked}>
                            <Icon boxSize={5} as={RiLightbulbFlashLine} />
                        </Button>
                    </Box>
                </Box>
                <RowKeys onDigitKeyClicked={onDigitKeyClicked}
                         row_id={1} />
                <RowKeys onDigitKeyClicked={onDigitKeyClicked}
                         row_id={2} />
                <HintAnswer     isOpen={isHintPopupOpened}
                                level={props?.level}
                                setHintPopupState={setHintPopupState}/>

                <WrongAnswer    isOpen={isAnswerPopupOpened}
                                setAnswerPopupState={setAnswerPopupState}/>
                         
            </Box>
        </>
    )
}

export default KeyBoard;