import React, { PropTypes } from 'react';
import styles from './SectionHeading.stylesheet.css';
import HeadingUnderline from '../HeadingUnderline/HeadingUnderline.component';

const SectionHeading = ({ text }) => {
  return (
    <div className={styles.SectionHeading}>
      <span className={styles.text}>{text}</span>
      <HeadingUnderline width={300}/>
    </div>
  )
};

SectionHeading.propTypes = {
  text: PropTypes.string
};

export default SectionHeading;
