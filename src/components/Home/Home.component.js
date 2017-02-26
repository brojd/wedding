import React from 'react';
import styles from './Home.stylesheet.css';

const Home = ({ brideName, groomName, date, backgroundUrl }) => {
  const homeStyle = {
    background: 'url(' + backgroundUrl + ') fixed center no-repeat',
    backgroundSize: 'cover'
  };
  return (
    <section className={styles.Home} style={homeStyle}>
      <div className={styles.backgroundWrapper}>
        <div className={styles.textWrapper}>
          <p className={styles.names}>{brideName} i {groomName}</p>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
    </section>
  )
};

export default Home;
