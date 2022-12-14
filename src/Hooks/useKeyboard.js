import { useState } from 'react'
import useGameInfo from './useGameboardRows'

const INITIAL_KEY_STATE = [
  { key: 'Q', match: '' },
  { key: 'W', match: '' },
  { key: 'E', match: '' },
  { key: 'R', match: '' },
  { key: 'T', match: '' },
  { key: 'Y', match: '' },
  { key: 'U', match: '' },
  { key: 'I', match: '' },
  { key: 'O', match: '' },
  { key: 'P', match: '' },
  { key: 'A', match: '' },
  { key: 'S', match: '' },
  { key: 'D', match: '' },
  { key: 'F', match: '' },
  { key: 'G', match: '' },
  { key: 'H', match: '' },
  { key: 'J', match: '' },
  { key: 'K', match: '' },
  { key: 'L', match: '' },
  { key: 'DEL', match: '' },
  { key: 'Z', match: '' },
  { key: 'X', match: '' },
  { key: 'C', match: '' },
  { key: 'V', match: '' },
  { key: 'B', match: '' },
  { key: 'N', match: '' },
  { key: 'M', match: '' },
  { key: 'ENTER', match: '' },
]

const useKeyboard = () => { 

  const [keys, setKeys] = useState(INITIAL_KEY_STATE)

  const updateKey = (tile) => {
    const {
      key,
      match
    } = tile
  };

  const resetKeyboard = () => {
    return setKeys(INITIAL_KEY_STATE)
  }

  return{
    keys,
    updateKey,
    resetKeyboard
  }
}
export default useKeyboard
