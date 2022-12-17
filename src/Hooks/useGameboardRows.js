import { useState, useCallback } from 'react'


const INITIAL_GAME_STATE = [
  [
    { key: '', style: { backgroundColor: '' }, match: '' },
    { key: '', style: { backgroundColor: '' }, match: '' },
    { key: '', style: { backgroundColor: '' }, match: '' },
    { key: '', style: { backgroundColor: '' }, match: '' },
    { key: '', style: { backgroundColor: '' }, match: '' }
  ],
  [
    { key: '', style: { backgroundColor: '' }, match: '' },
    { key: '', style: { backgroundColor: '' }, match: '' },
    { key: '', style: { backgroundColor: '' }, match: '' },
    { key: '', style: { backgroundColor: '' }, match: '' },
    { key: '', style: { backgroundColor: '' }, match: '' }
  ],
  [
    { key: '', style: { backgroundColor: '' }, match: '' },
    { key: '', style: { backgroundColor: '' }, match: '' },
    { key: '', style: { backgroundColor: '' }, match: '' },
    { key: '', style: { backgroundColor: '' }, match: '' },
    { key: '', style: { backgroundColor: '' }, match: '' }
  ],
  [
    { key: '', style: { backgroundColor: '' }, match: '' },
    { key: '', style: { backgroundColor: '' }, match: '' },
    { key: '', style: { backgroundColor: '' }, match: '' },
    { key: '', style: { backgroundColor: '' }, match: '' },
    { key: '', style: { backgroundColor: '' }, match: '' }
  ],
  [
    { key: '', style: { backgroundColor: '' }, match: '' },
    { key: '', style: { backgroundColor: '' }, match: '' },
    { key: '', style: { backgroundColor: '' }, match: '' },
    { key: '', style: { backgroundColor: '' }, match: '' },
    { key: '', style: { backgroundColor: '' }, match: '' }
  ]]

  const FOUND_TYPES = {
    exact: 'exact',
    found: 'found',
    nothing: 'nothing'
  }

const useGameboardRows = () => {
  const {
    exact,
    found,
    nothing
  } = FOUND_TYPES

  const [gameboardRows, setGameboardRows] = useState(INITIAL_GAME_STATE)

  const resetGameboard = () => {
    return setGameboardRows(INITIAL_GAME_STATE)
  };

  const handleGameBoardBackspace = (currentGameInfo) => {
    return setGameboardRows([...gameboardRows], gameboardRows[currentGameInfo.currentRow][currentGameInfo.currentTile].key = '')
  }

  const updateGameboardKeys = (tile, currentGameInfo) => {
    const {
      key,
      match
    } = tile;

    return setGameboardRows([...gameboardRows], gameboardRows[currentGameInfo.currentRow][currentGameInfo.currentTile].key = key)
  }

  const updateGameboardMatch = (i, currentGameInfo, type) => {
    if(type == exact){
      return setGameboardRows([...gameboardRows], gameboardRows[currentGameInfo.currentRow][i].match = exact)
    } else if(type == found){
      return setGameboardRows([...gameboardRows], gameboardRows[currentGameInfo.currentRow][i].match = found)
    } else {
      return setGameboardRows([...gameboardRows], gameboardRows[currentGameInfo.currentRow][i].match = nothing)
    }
  }

  return{
    gameboardRows,
    resetGameboard,
    setGameboardRows,
    updateGameboardKeys,
    updateGameboardMatch,
    handleGameBoardBackspace
  };
};

export default useGameboardRows
