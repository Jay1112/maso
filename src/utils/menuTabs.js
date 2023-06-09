import { Icon } from '@chakra-ui/react';
import { FiPlay } from 'react-icons/fi';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { AiOutlineSound } from 'react-icons/ai';
import { BiVolumeMute } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { FaUserAstronaut } from 'react-icons/fa';
import {ImCross} from 'react-icons/im';


export const menuTabsList = [
    {
        icon :  <Icon boxSize={10} as={FiPlay} />,
        text : 'PLAY',
        route : '/play'
    },
    {
        icon :  <Icon boxSize={10} as={BsFillGrid3X3GapFill} />,
        text : 'LEVELS',
        route : '/levels',
    },
    {
        toggleIcon :  <Icon boxSize={10} as={AiOutlineSound} /> ,
        icon : <Icon boxSize={10} as={BiVolumeMute} />,
        text : 'SOUND',
        route : null,
        clickFunctionality : true,
        clickFunctionalityId : 1
    },
    {
        icon :  <Icon boxSize={10} as={AiOutlineSetting} />,
        text : 'SETTINGS',
        route : '/settings',
    },
    {
        icon :  <Icon boxSize={10} as={FaUserAstronaut} />,
        text : 'Dev Info',
        route : '/dev',
    },
    {
        icon :  <Icon boxSize={10} as={ImCross} />,
        text : 'EXIT',
        link : 'https://www.google.com'
    },
];