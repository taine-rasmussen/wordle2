import { useState, useCallback } from 'react'


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

  const resetGameboard = () => {
    return setGameboardRows(INITIAL_GAME_STATE)
  };

  const handleGameBoardBackspace = (currentGameInfo) => {
    return setGameboardRows([...gameboardRows], gameboardRows[currentGameInfo.currentRow][currentGameInfo.currentTile].key = '')
  }

  const updateGameboard = (tile, currentGameInfo) => {
    const {
      key,
      match
    } = tile;

    return setGameboardRows([...gameboardRows], gameboardRows[currentGameInfo.currentRow][currentGameInfo.currentTile].key = key)
  }

  return{
    gameboardRows,
    resetGameboard,
    updateGameboard,
    handleGameBoardBackspace
  };
};

export default useGameboardRows
