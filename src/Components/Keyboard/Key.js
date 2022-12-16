import './Keyboard.css'
import useKeyboard from '../../Hooks/useKeyboard'
import useGameboardRows from '../../Hooks/useGameboardRows'
import useGameInfo from '../../Hooks/useGameInfo'

const Key = (props) => {
  const {
    tile
  } = props
  const {
    key,
    match
  } = tile

  const {
    updateKey
  } = useKeyboard();

  const {
    updateGameboard,
    handleGameBoardBackspace
  } = useGameboardRows();

  const {
    currentGameInfo,
    setCurrentGameInfo,
    handleBackSpace
  } = useGameInfo()

  const {
    currentRow,
    currentTile
  } = currentGameInfo

  const handleDelete = () => {
    handleBackSpace()
    handleGameBoardBackspace()
    console.log(currentGameInfo)
  }

  const handleClick = (tile) => {
    if (key == 'DEL') return handleDelete();
    if (key == 'ENTER' && currentTile == 5) {
      return console.log('submit')
    } else if (key == 'ENTER') return;

    updateGameboard (tile)
  };

  return (
    <button
      key={key}
      onClick={() => handleClick(tile)}
    >
      {key}
    </button>
  )
}

export default Key
