import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsBarChart } from 'react-icons/bs';

import './Header.css';

const Header = () => {
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
