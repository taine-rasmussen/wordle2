import React from 'react'
import useGameboardRows from '../../Hooks/useGameboardRows'
import './Tiles.css'


const Tiles = () => {

  const {
    gameboardRows
  } = useGameboardRows()

return(
  <div className='tiles-container'>
    {gameboardRows.map((row, i) => {
      return(
        <div className='row-index'>
          {row.map((tile, j) => {
            return(
              <div
                className='tile-cell'
              >
                x
              </div>
            )
          })} 
        </div>
      )})}
  </div>
)
}

export default Tiles
