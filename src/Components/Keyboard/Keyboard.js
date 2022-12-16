import './Keyboard.css'
import useKeyboard from '../../Hooks/useKeyboard'

const Keyboard = () => {

  const {
    keys,
    updateKey
  } = useKeyboard();

  return (
    <div className='keyboard-container'>
      {keys.map((key, i) => {
        return(
          <button
            onClick={() => updateKey(key)}
            key={key.key}
          >
            {key.key}
          </button>
        )
      })}
    </div>
  )
}

export default Keyboard
