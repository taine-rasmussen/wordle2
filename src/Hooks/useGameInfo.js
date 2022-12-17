import { useState, useCallback } from 'react'
import words from '../WordList'

const useGameInfo = (gameboardRows) => {

  const [winState, setWinState] = useState(false)
  const [wordle, setWordle] = useState()
  const [currentGameInfo, setCurrentGameInfo] = useState({
    currentRow: 0,
    currentTile: 0
  })

  const getRandomWord = () => {
    setWordle(words[Math.floor(Math.random() * words.length - 1)].toUpperCase().split(''))
  }

  const updateWinState = (bool) => {
    return setWinState(bool)
  }

  const handleBackSpace = () => {
    if (currentGameInfo.currentTile == 0) return;
    return currentGameInfo.currentTile = currentGameInfo.currentTile - 1
  };

  const updateCurrentGameInfo = useCallback(
    () => {
      if (currentGameInfo.currentTile > 4){
        return currentGameInfo.currentRow++, currentGameInfo.currentTile = 0
      } else {
        return currentGameInfo.currentTile++
      }
    },
    [gameboardRows, currentGameInfo]
  );

  return{
    winState,
    updateWinState,
    currentGameInfo,
    updateCurrentGameInfo,
    handleBackSpace,
    getRandomWord,
    wordle
  }
}

export default useGameInfo
