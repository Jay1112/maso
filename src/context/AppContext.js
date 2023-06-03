import { createContext, useReducer } from "react";
import { AppActions } from "./constants";
import { playAudio, pauseAudio } from "../utils/audioManager";

export const AppContext = createContext();

function appReducer(state,action){
    switch(action.type){
        case AppActions.SET_CURRENT_POINTS : {
            const ans = state.current_points + action.payload?.level_points ; 
            localStorage.setItem('current_points',ans);
            return {
                ...state,
                current_points : ans
            }
        }
        case AppActions.SET_CURRENT_LEVEL :{ 
            const ans = state.current_level + 1;
            localStorage.setItem('current_level',ans);
            return {
                ...state,
                current_level : ans
            }
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
        case AppActions.SET_HINT_LEVELS : {
            let ans = action.payload?.hintLevels ; 
            ans = ans.join(',');
            localStorage.setItem('hintLevels',ans);
            return {
                ...state,
                hintLevels : action.payload?.hintLevels
            }
        }
        case AppActions.INIT_CURRENT_LEVEL : {
            return {
                ...state,
                current_level : action.payload?.current_level
            }
        }
        case AppActions.INIT_CURRENT_POINTS : {
            return {
                ...state,
                current_points : action.payload?.current_points
            }
        }
        default : return state;
    }
}

export function AppContextProvider({ children }){
    const [state,dispatch] = useReducer(appReducer,{
        current_level : 1,
        current_points : 0,
        sound_on : false,
        hintLevels : [],
    });
    return (
        <AppContext.Provider value={{state,dispatch}}>
            { children }
        </AppContext.Provider>
    )
}