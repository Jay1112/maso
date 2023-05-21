import { useContext } from "react";
import { AppContext } from "./AppContext";

function useAppContext(){
    const context = useContext(AppContext);

    if(!context){
        throw new Error("Context Not Found");
    }

    return context ;
}

export default useAppContext;