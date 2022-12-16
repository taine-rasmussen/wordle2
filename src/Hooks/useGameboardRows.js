import { useState } from 'react'

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

  const updateGameboard = (tile) => {
    const {
      key,
      match
    } = tile;

    if(key == 'ENTER') return;
    if (key == 'DEL') return;

    



    console.log(key)
  };

  return{
    gameboardRows,
    resetGameboard,
    updateGameboard
  };
};

export default useGameboardRows
