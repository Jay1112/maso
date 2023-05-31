import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { playAudio, pauseAudio } from "../../utils/audioManager";
import useAppContext from "../../context/useAppContext";
import { AppActions } from "../../context/constants";

function MenuItem(props) {
    const {state,dispatch} = useAppContext();
  const [isAudioPlaying, setAudioPlaying] = useState(state.sound_on);
  const [icon, setIcon] = useState("icon");
  const navigate = useNavigate();

  useEffect(()=>{
    if(props?.item?.clickFunctionality && props?.item?.clickFunctionalityId === 1){
        if(state.sound_on){
            setIcon('toggleIcon');
        }else{
            setIcon('icon');
        }
    }
  },[icon])

  function toggleIcon() {
    if (props?.item?.toggleIcon) {
      !isAudioPlaying ? dispatch({ type : AppActions.SET_SOUND_ON }) : 
                        dispatch( { type : AppActions.SET_SOUND_OFF });
      setAudioPlaying(!isAudioPlaying);
      icon === "icon" ? setIcon("toggleIcon") : setIcon("icon");
    }
  }

  const handleClick = () => {
    if (props?.item?.route) {
      navigate(props?.item?.route);
    } else if (props?.item?.link) {
      window.open(props?.item?.link, "_self");
    }

    if (props?.item?.clickFunctionality) {
      if (props?.item?.clickFunctionalityId === 1) {
        toggleIcon();
      }
    }
  };

  return (
    <Box
      cursor="pointer"
      flex={0.15}
      background="teal.500"
      _hover={{
        border: "1px solid transparent",
        background: "linear-gradient(to right, #F59E0B, #D97706, #FCD34D)",
        boxShadow: "0px 0px 5px 5px rgba(255,255,255,0)"
      }}
      onClick={handleClick}
      margin="0.5rem 0"
      borderRadius="5px"
      width="95%"
      border="1px solid transparent"
      display="flex"
      alignItems="stretch"
      justifyContent="center"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="0 1rem"
      >
        {props?.item[icon]}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="0 0.25rem"
        flex={1}
      >
        <Text
          align="left"
          fontSize="2xl"
          padding="0 0.25rem"
          margin="0.25rem 0"
          width="100%"
          fontWeight={500}
          letterSpacing="0.1rem"
        >
          {props?.item?.text}
        </Text>
      </Box>
    </Box>
  );
}

export default MenuItem;
