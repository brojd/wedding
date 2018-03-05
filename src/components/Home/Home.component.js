import React, { PropTypes } from 'react';
import styles from './Home.stylesheet.css';
import { Element } from 'react-scroll';
import CountdownContainer from '../../containers/Countdown/Countdown.container';
import Jumbotron from '../../components/Jumbotron/Jumbotron.component';
import logo from './images/logo.png';

const Home = ({ backgroundUrl, smallText, largeText, date }) => {
  const homeStyle = {
    background: 'url(' + backgroundUrl + ') fixed center no-repeat',
    backgroundSize: 'cover'
  };
  const weddingDate = new Date(date);
  const dateToDisplay = `${weddingDate.getDate()}.${weddingDate.getMonth() + 1}.${weddingDate.getFullYear()}`;
  return (
    <Element name='Home'>
      <Jumbotron>
        <section className={styles.Home} style={homeStyle}>
          <div className={styles.backgroundWrapper}>
            <div className={styles.textWrapper}>
              <img src={logo} alt="logo" />
              <div className={styles.countdownWrapper}>
                <h3 className={styles.countdownHeading}>Pozostało:</h3>
                <CountdownContainer date={date} />
              </div>
            </div>
          </div>
        </section>
      </Jumbotron>
    </Element>
  )
};

Home.propTypes = {
  backgroundUrl: PropTypes.string,
  smallText: PropTypes.string,
  largeText: PropTypes.string,
  date: PropTypes.string
};

export default Home;
