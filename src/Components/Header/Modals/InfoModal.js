import { AiOutlineCloseCircle } from 'react-icons/ai'

import './InfoModal.css'

const InfoModal = (props) => {
  const {
    closeInfoModal
  } = props;

  return (
    <div className='info-modalbody-wrapper'>
      <div className='info-modalbody-header'>
        <AiOutlineCloseCircle
          onClick={closeInfoModal}
        />
      </div>
      <div className='info-modalbody-body'>
        Body goes here
      </div>
    </div>
  )
}

export default InfoModal;
