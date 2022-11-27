import { AiOutlineCloseCircle } from 'react-icons/ai'

import './statsModal.css'

const StatsModal = (props) => {
  const {
    closeStatsModal
  } = props;

  return (
    <div className='stats-modalbody-wrapper'>
      <div className='stats-modalbody-header'>
        <AiOutlineCloseCircle
          onClick={closeStatsModal}
        />
      </div>
      <div className='stats-modalbody-body'>
        Body goes here
      </div>
    </div>
  )
}

export default StatsModal;
