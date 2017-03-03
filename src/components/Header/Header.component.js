import React, { PropTypes } from 'react';
import styles from './Header.stylesheet.css';
import Nav from '../Nav/Nav.component';

const Header = ({ brideName, groomName, date}) => {
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

Header.propTypes = {
  brideName: PropTypes.string,
  groomName: PropTypes.string,
  date: PropTypes.string
};

export default Header;
