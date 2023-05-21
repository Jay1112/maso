import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../context/useAppContext";

function PlayGame(){
    const {state} = useAppContext();
    const navigate = useNavigate();

    useEffect(()=>{
        if(state.current_level){
            navigate(`/level/${state.current_level}`);
        }else{
            navigate('/page_not_found');
        }
    },[]);

    return (
        <>
        </>
    );
}

export default PlayGame;