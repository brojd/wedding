import React, {Component} from 'react';
import styles from './Header.stylesheet.css';

const WeddingParty = ({ brideName, groomName, date}) => {
  return (
    <header className={styles.Header}>
      <span className={styles.names}>{brideName} + {groomName} </span>
      <span className={styles.weddingDate}>{date}</span>
    </header>
  )
};

export default WeddingParty;
