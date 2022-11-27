import { AiOutlineCloseCircle } from 'react-icons/ai';

import Modal from '@material-ui/core/Modal';

import './InfoModal.css';

const defaultModalStyles = {
  position: 'absolute',
  borderRadius: '15px',
  background: 'white',
  height: '60%',
  width: '25%',
  margin: 'auto'
}

const InfoModal = (props) => {
  const {
    setToggleInfoModal,
    toggleInfoModal
  } = props;

  const closeInfoModal = () => {
    setToggleInfoModal(false)
  };

  return (
    <Modal
      onClose={closeInfoModal}
      open={toggleInfoModal}
      style={defaultModalStyles}
    >
      <div className='info-modalbody-wrapper'>
        <div className='info-modalbody-header'>
          <h3>How to play?</h3>
          <AiOutlineCloseCircle
            onClick={closeInfoModal}
            className='exit-btn'
          />
        </div>
        <div className='info-modalbody-body'>
          Body goes here
          </div>
      </div>
    </Modal>
  )
}

export default InfoModal;
