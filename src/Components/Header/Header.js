import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsBarChart } from 'react-icons/bs';
import Modal from '@material-ui/core/Modal';
import { useState } from 'react';

import './Header.css';

const Header = () => {

  const [toggleModal, setToggleModal] = useState(false);

  const openModal = () => {
    setToggleModal(true)
  };

  const closeModal = () => {
    setToggleModal(false)
  };

  return (
    <div className='header-wrapper'>
      <h3>Wordle</h3>
      <div className='header-cta-btns-wrapper'>
        <AiOutlineInfoCircle />
        <BsBarChart />
      </div>
    </div>
  )
}

export default Header
