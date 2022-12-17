import Tiles from './Tiles'
import './Gameboard.css'

const Gameboard = (props) => {
  const {
    gameboardRows
  } = props

  return (
    <div className='gameboard-container'>
      <Tiles
        gameboardRows={gameboardRows}
      />
    </div>
  )
}

export default Gameboard
