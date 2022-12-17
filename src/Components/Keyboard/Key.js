import './Keyboard.css'

const Key = (props) => {
  const {
    tile,
    handleClick
  } = props
  const {
    key,
    match
  } = tile

  return (
    <button
      key={key}
      onClick={() => handleClick(tile)}
      className={key}
    >
      {key}
    </button>
  )
}

export default Key
