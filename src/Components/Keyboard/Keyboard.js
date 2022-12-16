import './Keyboard.css'
import useKeyboard from '../../Hooks/useKeyboard'
import Key from './Key'

const Keyboard = () => {

  const {
    keys,
    updateKey
  } = useKeyboard();

  return (
    <div className='keyboard-container'>
      {keys.map((key) => {
        return(
          <Key 
            tile={key}
            key={key.key}
          />
        )
      })}
    </div>
  )
}

export default Keyboard
