import './style.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

function Header() {
  return (
    <>
      <div className='all-header'>
        <img className='logo-icon' src={logo} alt='logo-icon'></img>
        <div className='header-links'>
          <Link className='navigate-link' to>Home</Link>
          <Link className='navigate-link' to>About</Link>
          <Link className='navigate-link' to>Work</Link>
        </div>
          <Link className='contact-link navigate-link' to>Contact</Link>
      </div>
    </>
  );
}

export default Header;