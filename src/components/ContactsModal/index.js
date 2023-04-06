import './style.css';
import { Link } from 'react-router-dom';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import twitch from '../../assets/twitch.png';
import behance from '../../assets/behance.png';

function ContactsModal () {
  return (
    <>
      <div className='modal-social-networks'>
        <div className='social-networks'>
          <Link to='https://www.instagram.com/hada.nog' target='blank'><img src={instagram} alt='instagram-icon'></img></Link>
          <Link to='https://twitter.com/hada_nog' target='blank'><img src={twitter} alt='twitter-icon'></img></Link>
          <Link to='https://www.twitch.tv/hadanog' target='blank'><img src={ twitch } alt='twitch-icon'></img></Link>
          <Link to='https://www.behance.net/hadanog' target='blank'><img src={behance} alt='behance-icon'></img></Link>
        </div>
      </div>
    </>
  );
}

export default ContactsModal;