import React, { PropTypes } from 'react';
import styles from './Header.stylesheet.css';
import Nav from '../Nav/Nav.component';

const Header = () => {
  return (
    <header className={styles.Header}>
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
