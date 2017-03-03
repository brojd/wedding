import React from 'react';
import styles from './Home.stylesheet.css';
import { Element } from 'react-scroll';
import CountdownContainer from '../../containers/Countdown/Countdown.container';

const Home = ({ backgroundUrl, smallText, largeText, date }) => {
  const homeStyle = {
    background: 'url(' + backgroundUrl + ') fixed center no-repeat',
    backgroundSize: 'cover'
  };
  const weddingDate = new Date(date);
  const dateToDisplay = `${weddingDate.getDate()}.${weddingDate.getMonth() + 1}.${weddingDate.getFullYear()}`;
  return (
    <Element name='Home'>
      <section className={styles.Home} style={homeStyle}>
        <div className={styles.backgroundWrapper}>
          <div className={styles.textWrapper}>
            <h2 className={styles.smallText}>{smallText}</h2>
            <h1 className={styles.largeText}>{largeText}</h1>
            <h2 className={styles.date}>{dateToDisplay}</h2>
            <div className={styles.countdownWrapper}>
              <h3 className={styles.countdownHeading}>Pozostało:</h3>
              <CountdownContainer date={date} />
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
};

export default Home;
