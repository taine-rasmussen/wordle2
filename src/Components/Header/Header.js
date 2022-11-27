import { AiOutlineInfoCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsBarChart } from 'react-icons/bs';
import { useState } from 'react';

import './Header.css';
import InfoModal from './Modals/InfoModal'

const Header = () => {

  const [toggleInfoModal, setToggleInfoModal] = useState(false);
  const [toggleStatsModal, setToggleStatsModal] = useState(false);

  const openInfoModal = () => {
    setToggleInfoModal(true)
  };

  const openStatsModal = () => {
    setToggleStatsModal(true)
  };

  const CloseStatsModal = () => {
    setToggleStatsModal(false)
  };

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

      <InfoModal
        toggleInfoModal={toggleInfoModal}
        setToggleInfoModal={setToggleInfoModal}
      />
    </div>
  )
}

export default Header
