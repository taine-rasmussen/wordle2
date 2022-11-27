import { AiOutlineInfoCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsBarChart } from 'react-icons/bs';
import Modal from '@material-ui/core/Modal';
import { useState } from 'react';

import './Header.css';
import './InfoModal.css';
import './StatsModal.css';

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

  const defaultModalStyles = {
    position: 'absolute',
    borderRadius: '15px',
    background: 'white',
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
          onClick={openStatsModal}
        />
      </div>

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

      <Modal
        onClose={CloseStatsModal}
        open={toggleStatsModal}
        style={defaultModalStyles}
      >
        <div className='stats-modalbody-wrapper'>
          <div className='stats-modalbody-header'>
            Stats modal
          </div>
          <div className='stats-modalbody-body'>
            Body goes here
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Header
