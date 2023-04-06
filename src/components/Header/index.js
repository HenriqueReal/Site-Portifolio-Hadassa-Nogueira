import './style.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import twitch from '../../assets/twitch.png';
import behance from '../../assets/behance.png';

function Header () {
  return (
    <>
      <div className='all-header'>
        <img className='logo-icon' src={logo} alt='logo-icon'></img>
        <div className='header-links'>
          <Link className='navigate-link' to>Home</Link>
          <Link className='navigate-link' to>About</Link>
          <Link className='navigate-link' to>Work</Link>
        </div>
        <div className='container-contact'>
          <span className='contact'>Contact</span>
          <div className='social-networks'>
            <Link to='https://www.instagram.com/hada.nog' target='blank'><img src={instagram} alt='instagram-icon'></img></Link>
            <Link to='https://twitter.com/hada_nog' target='blank'><img src={twitter} alt='twitter-icon'></img></Link>
            <Link to='https://www.twitch.tv/hadanog' target='blank'><img src={ twitch } alt='twitch-icon'></img></Link>
            <Link to='https://www.behance.net/hadanog' target='blank'><img src={behance} alt='behance-icon'></img></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;