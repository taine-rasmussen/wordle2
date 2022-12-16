import './Keyboard.css'
import useKeyboard from '../../Hooks/useKeyboard'

const Key = (props) => {
  const {
    tile: {
      key,
      match
    },
  } = props


  const {
    updateKey
  } = useKeyboard();

  return (
    <button
      key={key}
      onClick={() => updateKey(key)}
    >
      {key}
    </button>
  )
}

export default Key
