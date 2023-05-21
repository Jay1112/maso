import { Box, Icon, Text, color } from "@chakra-ui/react";
import Logo from '../../assets/logo.png';
import {BiCoinStack} from 'react-icons/bi';
import useAppContext from "../../context/useAppContext";

function TopBar(){
    const {state} = useAppContext();
    return (
        <>
            <Box    width='100%'
                    display='flex'
                    alignItems='stretch'
                    justifyContent='center'
                    flex='0.1'>
                    <Box padding='0 0.5rem'
                         display='flex'
                         alignItems='center'
                         justifyContent='center'>
                        <img src={Logo} width={60} style={{
                            borderRadius : '5px'
                        }}/>
                    </Box>
                    <Box flex={1}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'>
                        <Text   align='left' 
                                padding='0 0.25rem'
                                margin='0.25rem 0'
                                width='100%'
                                fontWeight='bold'
                                letterSpacing='0.1rem'
                                >
                            <span style={{
                                    fontSize : '2.5rem',
                                    background: `linear-gradient(to right, #F59E0B, #D97706, #FCD34D)`,
                                    WebkitBackgroundClip:'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>
                                MASO
                            </span>
                        </Text>
                    </Box>
                    <Box display='flex'
                        alignItems='center'
                        justifyContent='center'>
                        <Text   align='right' 
                                width='100%'
                                fontWeight='bold'
                                >
                            <span style={{
                                display : 'flex',
                                alignItems:'center',
                                justifyContent:'center',
                                color:'greenyellow'
                            }}>
                                <Icon boxSize={6} as={BiCoinStack} />
                                { state?.current_points }
                            </span>
                            
                        </Text>
                    </Box>
            </Box>
        </>
    )
}

export default TopBar;