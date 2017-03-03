import React from 'react';
import styles from './Countdown.stylesheet.css';

const Countdown = ({ text, time }) => {
  return (
    <article className={styles.Countdown}>
      <div className={styles.textWrapper}>
        <h5 className={styles.heading}>{text}</h5>
        <div className={styles.time}>{time}</div>
      </div>
    </article>
  )
};

export default Countdown;
