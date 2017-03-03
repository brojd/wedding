import React, { PropTypes } from 'react';
import styles from './Footer.stylesheet.css';

const Footer = ({ text}) => {
  return (
    <footer className={styles.Footer}>{text}</footer>
  )
};

Footer.propTypes = {
  text: PropTypes.string
};

export default Footer;
