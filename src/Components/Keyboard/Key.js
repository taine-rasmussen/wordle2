import './Keyboard.css'
import useKeyboard from '../../Hooks/useKeyboard'
import useGameboardRows from '../../Hooks/useGameboardRows'

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
    updateGameboard
  } = useGameboardRows();

  const handleClick = (tile) => {
    updateKey(tile)
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
