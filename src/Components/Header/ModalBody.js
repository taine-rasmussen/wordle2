import { AiOutlineCloseCircle } from 'react-icons/ai'

import './ModalBody.css'

const ModalBody = (props) => {
  const {
    closeModal
  } = props;

  return (
    <div className='modalbody-wrapper'>
      <div className='modalbody-header'>
        <AiOutlineCloseCircle
          onClick={closeModal}
        />
      </div>
      <div className='modalbody-body'>
        Body goes here
      </div>
    </div>
  )
}

export default ModalBody
