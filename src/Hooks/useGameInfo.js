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
      console.log(gameboardRows[0], currentGameInfo)
      if (currentGameInfo.currentTile == 5 && currentGameInfo.currentRow != 5){
        return currentGameInfo.currentRow++, currentGameInfo.currentTile = 0
      } else {
        return currentGameInfo.currentTile++
      }
    },
    [gameboardRows, currentGameInfo]
  )

    // rendering issue
    // function is called and works correctly first time
    // Issue with my rendering is the functions called again and reset to 0

  return{
    winState,
    updateWinState,
    currentGameInfo,
    updateCurrentGameInfo,
    handleBackSpace
  }
}

export default useGameInfo
