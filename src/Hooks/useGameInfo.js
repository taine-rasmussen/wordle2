import { useState, useCallback } from 'react'

const useGameInfo = (gameboardRows) => {

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
    handleBackSpace
  }
}

export default useGameInfo
