import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsBarChart } from 'react-icons/bs';
import Modal from '@material-ui/core/Modal';
import { useState } from 'react';

import './Header.css';
import InfoModal from './Modals/InfoModal'

const Header = () => {

  const [toggleInfoModal, setToggleInfoModal] = useState(false);
  const [toggleStatsModal, setToggleStatsModal] = useState(false);

  const openInfoModal = () => {
    setToggleInfoModal(true)
  };

  const closeInfoModal = () => {
    setToggleInfoModal(false)
  };

  const openStatsModal = () => {
    setToggleStatsModal(true)
  };

  const CloseStatsModal = () => {
    setToggleStatsModal(false)
  };

  const infoModalStyles = {
    position: 'absolute',
    border: '2px solid #000',
    borderRadius: '20px',
    backgroundColor: 'gray',
    height: '60%',
    width: '25%',
    margin: 'auto'
  }

  return (
    <div className='header-wrapper'>
      <h3>Wordle</h3>
      <div className='header-cta-btns-wrapper'>
        <AiOutlineInfoCircle
          onClick={openInfoModal}
        />
        <BsBarChart
          onclick={openStatsModal}
        />
      </div>

      <Modal
        onClose={closeInfoModal}
        open={toggleInfoModal}
        style={infoModalStyles}
      >
        <InfoModal
          closeModal={closeInfoModal}
        />
      </Modal>

      <Modal
        onClose={closeInfoModal}
        open={toggleStatsModal}
        style={infoModalStyles}
      >
        <InfoModal
          closeModal={closeInfoModal}
        />
      </Modal>
    </div>
  )
}

export default Header
