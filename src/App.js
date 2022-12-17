import './App.css';
import useGameInfo from './Hooks/useGameInfo'
import useGameboardRows from './Hooks/useGameboardRows'

import Header from './Components/Header/Header';
import Gameboard from './Components/Gameboard/Gameboard';
import Keyboard from './Components/Keyboard/Keyboard';

function App() {

  const {
    winState
  } = useGameInfo()

  const {
    gameboardRows,
    updateGameboard,
    handleGameBoardBackspace,
  } = useGameboardRows();

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
            />
          </>
        )
      }
    </div>
  );
}

export default App;
