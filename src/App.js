import './App.css';
import useGameInfo from './Hooks/useGameInfo'

import Header from './Components/Header/Header';
import Gameboard from './Components/Gameboard/Gameboard';
import Keyboard from './Components/Keyboard/Keyboard';

function App() {

  const {
    winState
  } = useGameInfo()

  return (
    <div className="App">
      {winState ? 
        (
          <p>winners page in the works</p>
        ) : 
        (
          <>
            <Header/>
            <Gameboard />
            <Keyboard />
          </>
        )
      }
    </div>
  );
}

export default App;
