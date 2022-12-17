import { useEffect } from 'react'
import './App.css';
import useGameInfo from './Hooks/useGameInfo'
import useGameboardRows from './Hooks/useGameboardRows'

import Header from './Components/Header/Header';
import Gameboard from './Components/Gameboard/Gameboard';
import Keyboard from './Components/Keyboard/Keyboard';

function App() {

  const {
    wordle,
    winState,
    getRandomWord,
    updateWinState
  } = useGameInfo()

  const {
    gameboardRows,
    updateGameboard,
    handleGameBoardBackspace,
  } = useGameboardRows();

  useEffect(
    () => {
      return getRandomWord()
    },
    []
  );

  console.log(wordle)

  return (
    <div className="App">
      {winState ? 
        (
          <p>winners page in the works</p>
        ) : 
        (
          <>
            <Header/>
            <Gameboard 
              gameboardRows={gameboardRows}
            />
            <Keyboard 
              gameboardRows={gameboardRows}
              updateGameboard={updateGameboard}
              handleGameBoardBackspace={handleGameBoardBackspace}
              wordle={wordle}
              updateWinState={updateWinState}
            />
          </>
        )
      }
    </div>
  );
}

export default App;
