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

  const handleSubmit = () => {
    console.log('submit func!')
    return currentGameInfo.currentRow++, currentGameInfo.currentTile = 0
  }

  const handleClick = (tile) => {
    const {
      key
    } = tile

    if (key == 'DEL') return handleDelete(currentGameInfo);
    if (key == 'ENTER' && currentGameInfo.currentTile == 5) {
      return handleSubmit()
    } else if (key == 'ENTER') return;
    if(currentGameInfo.currentTile == 5) return;

    updateGameboard(tile, currentGameInfo)
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
