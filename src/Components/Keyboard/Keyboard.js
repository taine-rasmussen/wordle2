import './Keyboard.css'
import useKeyboard from '../../Hooks/useKeyboard'
import useGameInfo from '../../Hooks/useGameInfo'

import Key from './Key'

const Keyboard = (props) => {
  const {
    gameboardRows,
    updateGameboard,
    handleGameBoardBackspace
  } = props

  const {
    keys,
    updateKey
  } = useKeyboard();

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

    if (key == 'DEL') return handleDelete(currentGameInfo);
    if (key == 'ENTER' && currentTile == 5) {
      return console.log('submit')
    } else if (key == 'ENTER') return;

    updateGameboard(tile, currentGameInfo)
    updateCurrentGameInfo()
    console.log(gameboardRows)
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
