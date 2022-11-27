import { AiOutlineCloseCircle } from 'react-icons/ai';
import Modal from '@material-ui/core/Modal';

import './StatsModal.css';

const defaultModalStyles = {
  position: 'absolute',
  borderRadius: '15px',
  background: 'white',
  height: '60%',
  width: '25%',
  margin: 'auto'
}

const StatsModal = (props) => {
  const {
    setToggleStatsModal,
    toggleStatsModal
  } = props;

  const closeStatsModal = () => {
    setToggleStatsModal(false)
  };

  return (
    <Modal
      onClose={closeStatsModal}
      open={toggleStatsModal}
      style={defaultModalStyles}
    >
      <div className='info-modalbody-wrapper'>
        <div className='info-modalbody-header'>
          <h3>Stats coming soon</h3>
          <AiOutlineCloseCircle
            onClick={closeStatsModal}
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

export default StatsModal;
