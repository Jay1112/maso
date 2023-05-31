import { Box,Button,Icon,Text } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { HiHome } from 'react-icons/hi';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ConfettiExplosion from 'react-confetti-explosion';

function ResultPage(props){
    const navigate = useNavigate();
    const locationData = useLocation();

    useEffect(()=>{
        if(!locationData?.state){
            navigate('/page_not_found');
        }
    },[]);
    return (
        <Box    textAlign="center"
                position={'relative'}
                width='100%'
                fontSize="xl"
                display='flex'
                alignItems='center'
                flexDirection='column'
                justifyContent='center'
                className='fade-in'
                flex='1'>
            <Box    width={'100%'}
                    flexDirection='column'
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    flex={1}>
                <Text fontSize={'4xl'}>
                    Congratulations!
                </Text>
                <Text>
                    You won <span style={{color:'springgreen', fontWeight:'bold'}}>{locationData?.state?.level_points} Points</span>
                </Text>
            </Box>
            <Box display='flex'
                 alignItems='center'
                 justifyContent='center'
                 padding={'1rem'}
                 width={'100%'}>
                <Button margin={'0 0.25rem'} onClick={()=>{ navigate(locationData?.state?.next_route) }}>
                    <ArrowRightIcon />
                </Button>
                <Button margin={'0 0.25rem'} onClick={()=>{ navigate(locationData?.state?.back_route) }}>
                    <Icon boxSize={6} as={HiHome} />
                </Button>
            </Box>
            <Box position={'absolute'}
                 display={'flex'}
                 alignItems={'center'}
                 justifyContent={'center'}
                 zIndex={2}>
                <ConfettiExplosion  duration={5000}/>
            </Box>
        </Box>
    );
}

export default ResultPage;