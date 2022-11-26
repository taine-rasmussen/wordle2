import './App.css';

import Header from './Components/Header/Header';
import Gameboard from './Components/Gameboard/Gameboard';
import Keyboard from './Components/Keyboard/Keyboard';

function App() {

  return (
    <div className="App">
      <Header/>
      <Gameboard />
      <Keyboard />
    </div>
  );
}

export default App;
