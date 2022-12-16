import { useState } from 'react'
import useGameInfo from './useGameInfo'


const INITIAL_GAME_STATE = [
  [
    { key: '', style: { backgroundColor: '' }, found: false },
    { key: '', style: { backgroundColor: '' }, found: false },
    { key: '', style: { backgroundColor: '' }, found: false },
    { key: '', style: { backgroundColor: '' }, found: false },
    { key: '', style: { backgroundColor: '' }, found: false }
  ],
  [
    { key: '', style: { backgroundColor: '' }, found: false },
    { key: '', style: { backgroundColor: '' }, found: false },
    { key: '', style: { backgroundColor: '' }, found: false },
    { key: '', style: { backgroundColor: '' }, found: false },
    { key: '', style: { backgroundColor: '' }, found: false }
  ],
  [
    { key: '', style: { backgroundColor: '' }, found: false },
    { key: '', style: { backgroundColor: '' }, found: false },
    { key: '', style: { backgroundColor: '' }, found: false },
    { key: '', style: { backgroundColor: '' }, found: false },
    { key: '', style: { backgroundColor: '' }, found: false }
  ],
  [
    { key: '', style: { backgroundColor: '' }, found: false },
    { key: '', style: { backgroundColor: '' }, found: false },
    { key: '', style: { backgroundColor: '' }, found: false },
    { key: '', style: { backgroundColor: '' }, found: false },
    { key: '', style: { backgroundColor: '' }, found: false }
  ],
  [
    { key: '', style: { backgroundColor: '' }, found: false },
    { key: '', style: { backgroundColor: '' }, found: false },
    { key: '', style: { backgroundColor: '' }, found: false },
    { key: '', style: { backgroundColor: '' }, found: false },
    { key: '', style: { backgroundColor: '' }, found: false }
  ]]

const useGameboardRows = () => {

  const [gameboardRows, setGameboardRows] = useState(INITIAL_GAME_STATE)

  const {
    currentGameInfo,
    setCurrentGameInfo,
    handleBackSpace
  } = useGameInfo()

  const {
    currentRow,
    currentTile
  } = currentGameInfo

  const resetGameboard = () => {
    return setGameboardRows(INITIAL_GAME_STATE)
  };

  const handleGameBoardBackspace = () => {
    return setGameboardRows([...gameboardRows], gameboardRows[currentRow][currentTile].key = '')
  }

  const updateGameboard = (tile) => {
    const {
      key,
      match
    } = tile;

    if (currentTile > 4) {
      return currentRow++, currentTile = 0,
        gameboardRows([...gameboardRows], gameboardRows[currentRow][currentTile].key = key)
    } else {
      return setGameboardRows([...gameboardRows], gameboardRows[currentRow][currentTile].key = key), currentTile++
    }
  }

  return{
    gameboardRows,
    resetGameboard,
    updateGameboard,
    handleGameBoardBackspace
  };
};

export default useGameboardRows
