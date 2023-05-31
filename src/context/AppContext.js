import { createContext, useReducer } from "react";
import { AppActions } from "./constants";
import { playAudio, pauseAudio } from "../utils/audioManager";

export const AppContext = createContext();

function appReducer(state,action){
    switch(action.type){
        case AppActions.SET_CURRENT_POINTS : 
            return {
                ...state,
                current_points : state.current_points + action.payload?.level_points
            }
        case AppActions.SET_CURRENT_LEVEL : 
            return {
                ...state,
                current_level : state.current_level + 1,
            }
        case AppActions.SET_SOUND_ON :
            playAudio(); 
            return {
                ...state,
                sound_on : true,
            }
        case AppActions.SET_SOUND_OFF : 
            pauseAudio();
            return {
                ...state,
                sound_on : false,
            }
        default : return state;
    }
}

export function AppContextProvider({ children }){
    const [state,dispatch] = useReducer(appReducer,{
        current_level : 1,
        current_points : 0,
        sound_on : false
    });
    return (
        <AppContext.Provider value={{state,dispatch}}>
            { children }
        </AppContext.Provider>
    )
}