import './Keyboard.css'
import useKeyboard from '../../Hooks/useKeyboard'

const Keyboard = () => {

  const {
    keys,
    updateKey,
    resetKeyboard
  } = useKeyboard();

  return (
    <div className='keyboard-container'>
      {keys.map((key, i) => {
        return(
          <button>
            {key.key}
          </button>
        )
      })}

    </div>
  )
}

export default Keyboard
