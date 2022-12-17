import { AiOutlineInfoCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsBarChart } from 'react-icons/bs';
import { SiWritedotas } from 'react-icons/si'
import { useState } from 'react';

import './Header.css';
import InfoModal from './Modals/InfoModal'
import StatsModal from './Modals/StatsModal'


const Header = () => {

  const [toggleInfoModal, setToggleInfoModal] = useState(false);
  const [toggleStatsModal, setToggleStatsModal] = useState(false);

  const openInfoModal = () => {
    setToggleInfoModal(true)
  };

  const openStatsModal = () => {
    setToggleStatsModal(true)
  };

  return (
    <div className='header-wrapper'>
      {/* <SiWritedotas /> */}
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
      <StatsModal
        toggleStatsModal={toggleStatsModal}
        setToggleStatsModal={setToggleStatsModal}
      />
    </div>
  )
}

export default Header
