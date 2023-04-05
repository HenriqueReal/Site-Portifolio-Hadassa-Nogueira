import './style.css';
import Header from '../../components/Header';
import profileIcon from '../../assets/profile.jpg'

function Home() {
  return (
    <>
      <Header/>
      <body>
        <section className='about'>
          <img className='profile-icon' src={profileIcon} alt='profile-icon'></img>
          <l1>⭐ Eu sou a Hada, muito prazer! 💕 </l1>
          <li>⭐ Sou formada em design gráfico, mas atualmente trabalho como ilustradora freelancer!</li>
          <li>⭐ Faço lives na twitch compartilho um pouco do meu trabalho, meus estudos e aproveito para aprender com o chat!</li>
        </section>
      </body>
    </>
  );
}

export default Home;
