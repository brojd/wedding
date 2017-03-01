import React from 'react';
import styles from './Home.stylesheet.css';

const Home = ({ backgroundUrl, smallText, largeText }) => {
  const homeStyle = {
    background: 'url(' + backgroundUrl + ') fixed center no-repeat',
    backgroundSize: 'cover'
  };
  return (
    <section className={styles.Home} style={homeStyle}>
      <div className={styles.backgroundWrapper}>
        <div className={styles.textWrapper}>
          <h2 className={styles.smallText}>{smallText}</h2>
          <h1 className={styles.largeText}>{largeText}</h1>
        </div>
      </div>
    </section>
  )
};

export default Home;