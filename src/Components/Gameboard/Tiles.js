import './Tiles.css'

const Tiles = (props) => {
  const {
    gameboardRows
  } = props

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
                  className={tile.key ? 'tile-cell-filled' : 'tile-cell'}
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
