import React from 'react';
import styles from './Home.stylesheet.css';
import { Element } from 'react-scroll';

const Home = ({ backgroundUrl, smallText, largeText, date }) => {
  const homeStyle = {
    background: 'url(' + backgroundUrl + ') fixed center no-repeat',
    backgroundSize: 'cover'
  };
  return (
    <Element name='Home'>
      <section className={styles.Home} style={homeStyle}>
        <div className={styles.backgroundWrapper}>
          <div className={styles.textWrapper}>
            <h2 className={styles.smallText}>{smallText}</h2>
            <h1 className={styles.largeText}>{largeText}</h1>
            <h2 className={styles.date}>{date}</h2>
          </div>
        </div>
      </section>
    </Element>
  )
};

export default Home;
