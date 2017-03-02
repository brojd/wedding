import React from 'react';
import styles from './Header.stylesheet.css';
import Nav from '../Nav/Nav.component';

const WeddingParty = ({ brideName, groomName, date}) => {
  return (
    <header className={styles.Header}>
      <span className={styles.names}>
        {brideName} <span className="glyphicon glyphicon-heart" aria-hidden="true"></span> {groomName}
      </span>
      <span className={styles.weddingDate}>{date}</span>
      <Nav />
    </header>
  )
};

export default WeddingParty;
