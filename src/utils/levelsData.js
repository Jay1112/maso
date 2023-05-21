import { levelJsxData } from "./levelsJsx";

function getJsx(index){
    return levelJsxData?.at(index) ? levelJsxData?.at(index) : null;
}

export const levelDiffCode  = {
    EASY : 'EASY',
    MEDIUM : 'MEDIUM',
    HARD : 'HARD',
    ADVACED : 'ADVANCED'
}

export const levels = [
    {
        level_id : 1,
        level_name : '1',
        level_route : '/level/1',
        level_content : getJsx(0),
        level_difficulty : levelDiffCode.EASY,
        level_answer : '32',
        level_points : 50,
    },
    {
        level_id : 2,
        level_name : '2',
        level_route : '/level/2',
        level_content : getJsx(1),
        level_difficulty : levelDiffCode.EASY,
        level_answer : '6',
        level_points : 50,
    },
    {
        level_id : 3,
        level_name : '3',
        level_route : '/level/3',
        level_content : getJsx(2),
        level_difficulty : levelDiffCode.EASY,
        level_answer : '7',
        level_points : 50,
    },
    // {
    //     level_id : 4,
    //     level_name : '4',
    //     level_route : '/level/4',
    // },
    // {
    //     level_id : 5,
    //     level_name : '5',
    //     level_route : '/level/5',
    // },
];