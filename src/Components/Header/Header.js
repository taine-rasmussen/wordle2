import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsBarChart } from 'react-icons/bs';
import Modal from '@material-ui/core/Modal';
import { useState } from 'react';

import './Header.css';
import ModalBody from './ModalBody'

const Header = () => {

  const [toggleModal, setToggleModal] = useState(false);

  const openModal = () => {
    setToggleModal(true)
  };

  const closeModal = () => {
    setToggleModal(false)
  };

  const modalStyles = {
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
          onClick={openModal}
        />
        <BsBarChart />
      </div>
      <Modal
        onClose={closeModal}
        open={toggleModal}
        style={modalStyles}
      >
        <ModalBody
          closeModal={closeModal}
        />
      </Modal>
    </div>
  )
}

export default Header
