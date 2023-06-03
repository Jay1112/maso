import { useState } from "react";

function useTrack(){
    const pointTrackerString    = 'current_points'  ; 
    const levelNumberString     = 'current_level'   ;
    const hintLevelsString      = 'hintLevels'      ;

    const [isCompleted,setCompleted]    = useState(false);
    const [trackData,setTrackData]      = useState(null);

    const loadLocalStorageData = () => {
        setCompleted(false);
        setTrackData(null);

        let result = {} ;

        if(localStorage.getItem(pointTrackerString)){
            const data = Number(localStorage.getItem(pointTrackerString));
            if(isNaN(data)){
                localStorage.setItem(pointTrackerString,'0');
                result = { ...result, current_points : 0 };
            }else{
                result = { ...result, current_points : data };
            }
        }else{
            localStorage.setItem(pointTrackerString,'0');
            result = { ...result, current_points : 0 };
        }

        if(localStorage.getItem(hintLevelsString)){
            let data = localStorage.getItem(hintLevelsString);
            if(!data){
                localStorage.setItem(hintLevelsString,'');
                result = { ...result, hintLevels : [] };
            }else{
                data = data.split(',');
                data = data.map((item)=>Number(item));
                result = { ...result, hintLevels : data };
            }
        }else{
            localStorage.setItem(hintLevelsString,'');
            result = { ...result, hintLevels : [] };
        }

        if(localStorage.getItem(levelNumberString)){
            const data = Number(localStorage.getItem(levelNumberString));
            if(isNaN(data)){
                localStorage.setItem(levelNumberString,'1');
                result = { ...result, current_level : 1 };
            }else{
                result = { ...result, current_level : data };
            }
        }else{
            localStorage.setItem(levelNumberString,'1');
            result = { ...result, current_level : 1 };
        }

        setCompleted(true);
        setTrackData(result);
    }

    return { isCompleted, trackData, loadLocalStorageData  } ;

}

export default useTrack;