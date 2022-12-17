import './Keyboard.css'
import useKeyboard from '../../Hooks/useKeyboard'
import useGameboardRows from '../../Hooks/useGameboardRows'
import useGameInfo from '../../Hooks/useGameInfo'

import Key from './Key'

const Keyboard = () => {

  const {
    keys,
    updateKey
  } = useKeyboard();

  const {
    updateGameboard,
    handleGameBoardBackspace,
    gameboardRows
  } = useGameboardRows();

  const {
    currentGameInfo,
    updateCurrentGameInfo,
    handleBackSpace
  } = useGameInfo(gameboardRows)

  const {
    currentRow,
    currentTile
  } = currentGameInfo

  const handleDelete = () => {
    handleBackSpace()
    handleGameBoardBackspace()
  }

  const handleClick = (tile) => {
    const {
      key,
      match
    } = tile
    
    if (key == 'DEL') return handleDelete();
    if (key == 'ENTER' && currentTile == 5) {
      return console.log('submit')
    } else if (key == 'ENTER') return;

    updateGameboard(tile)
    updateCurrentGameInfo()
  };

  return (
    <div className='keyboard-container'>
      {keys.map((key) => {
        return(
          <Key 
            tile={key}
            key={key.key}
            handleClick={handleClick}
          />
        )
      })}
    </div>
  )
}

export default Keyboard
