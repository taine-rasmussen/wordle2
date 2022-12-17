import './Keyboard.css'
import useKeyboard from '../../Hooks/useKeyboard'
import useGameInfo from '../../Hooks/useGameInfo'

import Key from './Key'

const Keyboard = (props) => {
  const {
    wordle,
    gameboardRows,
    updateWinState,
    setGameboardRows,
    updateGameboardKeys,
    updateGameboardMatch,
    handleGameBoardBackspace,
  } = props

  const {
    keys,
    updateKey
  } = useKeyboard();

  const {
    currentGameInfo,
    updateCurrentGameInfo,
    handleBackSpace
  } = useGameInfo(gameboardRows)

  const handleDelete = () => {
    handleBackSpace()
    handleGameBoardBackspace()
  }

  const handleSubmit = (submittedRow) => {
    const submittedWord = Object.keys(submittedRow).map(i => submittedRow[i]['key'])
    if(JSON.stringify(submittedWord) === JSON.stringify(wordle)) return updateWinState(true);

    wordle.map((letter, i) => {
      submittedWord.map((subLetter, j) => {
        if(letter == subLetter && i == j){
          // console.log(letter, subLetter, gameboardRows[currentGameInfo.currentRow][i].match)
          return setGameboardRows([...gameboardRows], gameboardRows[currentGameInfo.currentRow][i].match = 'exact')
        } else if (letter == subLetter) {
          return setGameboardRows([...gameboardRows], gameboardRows[currentGameInfo.currentRow][i].match = 'found')
        } else {
          return setGameboardRows([...gameboardRows], gameboardRows[currentGameInfo.currentRow][i].match = 'nothing')
        }
      })
    })

    console.log(gameboardRows)
    
    return currentGameInfo.currentRow++, currentGameInfo.currentTile = 0
  }


  const handleClick = (tile) => {
    const {
      key
    } = tile

    if (key == 'DEL') return handleDelete(currentGameInfo);
    if (key == 'ENTER' && currentGameInfo.currentTile == 5) {
      return handleSubmit(gameboardRows[currentGameInfo.currentRow])
    } else if (key == 'ENTER') return;
    if(currentGameInfo.currentTile == 5) return;

    updateGameboardKeys(tile, currentGameInfo)
    updateCurrentGameInfo()
  };

  return (
    <div className='keyboard-container'>
      {keys.map((key) => {
        return(
          <Key 
            tile={key}
            key={key.key}
            handleClick={handleClick}
          />
        )
      })}
    </div>
  )
}

export default Keyboard
