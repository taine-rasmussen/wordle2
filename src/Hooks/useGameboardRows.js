import { useState } from 'react'

const useGameboardRows = () => {

  const [gameboardRows, setGameboardRows] = ([
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
    ]])

  return{
    gameboardRows
  };
};

export default useGameboardRows
