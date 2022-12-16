import { useState } from 'react'

const useGameInfo = () => {

  const [winState, setWinState] = useState(false)
  const [currentGameInfo, setCurrentGameInfo] = useState({
    currentRow: 0,
    currentTile: 0
  })

  const updateWinState = () => {
    return setWinState(prevWinState => prevWinState)
  }

  const handleBackSpace = () => {
    if (currentGameInfo.currentTile == 0) return;
    return currentGameInfo.currentTile = currentGameInfo.currentTile - 1
  };

  return{
    winState,
    updateWinState,
    currentGameInfo,
    setCurrentGameInfo,
    handleBackSpace
  }
}

export default useGameInfo
