import { Box } from "@chakra-ui/react";
import { levels } from "../../utils/levelsData";
import GridItem from "../GridItem/GridItem";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../context/useAppContext";

function LevelsGrid(){
    const navigate = useNavigate();
    const {state} = useAppContext();

    function onLevelButtonClicked(value){
        if(value){
            navigate(`/level/${value}`);
        }
    }

    return (
        <>
            <Box    width='100%'
                    display='flex'
                    alignItems='center'
                    flexDirection='column'
                    justifyContent='flex-start'
                    overflow={'scroll'}
                    flex='0.9'>
                    {/* Todo : apply media query for levels flex  */}
                    <Box    padding='0.5rem 0.25rem'
                            width='100%'
                            display='flex'
                            overflow={'scroll'}
                            flexWrap='wrap'
                            alignItems='flex-start'
                            justifyContent='flex-start'>
                        {
                            levels.map((item)=>{
                                const isClickable = item?.level_id <= state?.current_level ;
                                const isDone = item?.level_id < state?.current_level ;
                                return <GridItem buttonClickListener={isClickable && onLevelButtonClicked} 
                                                 key={item?.level_id} 
                                                 item={item}
                                                 isDone={isDone}
                                                 width='100px'
                                                 height='100px' />
                            })
                        }
                    </Box>
            </Box>
        </>
    )
}

export default LevelsGrid;