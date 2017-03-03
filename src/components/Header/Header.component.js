import React from 'react';
import styles from './Header.stylesheet.css';
import Nav from '../Nav/Nav.component';

const WeddingParty = ({ brideName, groomName, date}) => {
  const weddingDate = new Date(date);
  const dateToDisplay = `${weddingDate.getDate()}/${weddingDate.getMonth() + 1}/${weddingDate.getFullYear()}`;
  return (
    <header className={styles.Header}>
      <span className={styles.names}>
        {brideName} <span className="glyphicon glyphicon-heart" aria-hidden="true"></span> {groomName}
      </span>
      <span className={styles.weddingDate}>{dateToDisplay}</span>
      <Nav />
    </header>
  )
};

export default WeddingParty;
