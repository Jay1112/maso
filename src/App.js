import {
  ChakraProvider,
  Box,
  Stat,
} from '@chakra-ui/react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import HomePage from './Pages/HomePage/HomePage';
import LevelPage from './Pages/LevelsPage/LevelsPage';
import SingleLevelPage from './Pages/SingleLevelPage/SingleLevelPage';
import theme from './utils/theme';
import { appStyleObj } from './AppStyle';
import PlayGame from './Components/PlayGame/PlayGame';
import ResultPage from './Pages/ResultPage/ResultPage';
import './App.css';
import { useEffect } from 'react';
import useAppContext from './context/useAppContext';
import { AppActions } from './context/constants';

function App() {
  const {dispatch} = useAppContext();
  localStorage.setItem("chakra-ui-color-mode","dark");

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Box  style={appStyleObj.mainBox}>
          <Box  style={appStyleObj.innerBox}>
              <Routes>
                <Route exact path='/' element={<HomePage/>} />
                <Route exact path='/levels' element={<LevelPage/>} />
                <Route path='/level/:id' element={<SingleLevelPage/>} />
                <Route path='/play' element={<PlayGame/>} />
                <Route path='/result' element={<ResultPage/>} />
                <Route path='*' element={<PageNotFound/>} />
              </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
