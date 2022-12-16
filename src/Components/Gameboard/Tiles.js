import { useEffect } from 'react'
import useGameboardRows from '../../Hooks/useGameboardRows'
import './Tiles.css'


const Tiles = () => {
  
  const {
    gameboardRows,
    resetGameboard
  } = useGameboardRows();

  return(
    <div className='tiles-container'>
      {gameboardRows.map((row, i) => {
        return(
          <div 
            className='row-container'
            key={i}
          >
            {row.map((tile, j) => {
              return(
                <div
                  className='tile-cell'
                  key={j}
                >
                {tile.key} 
                </div>
              )
            })} 
          </div>
        )})}
    </div>
  )
}

export default Tiles
