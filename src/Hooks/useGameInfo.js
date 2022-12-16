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

  return{
    winState,
    updateWinState,
    currentGameInfo,
    setCurrentGameInfo
  }
}

export default useGameInfo
