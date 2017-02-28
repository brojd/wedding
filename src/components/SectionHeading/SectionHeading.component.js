import React from 'react';
import styles from './SectionHeading.stylesheet.css';
import HeadingUnderline from '../HeadingUnderline/HeadingUnderline.component';

const SectionHeading = ({ text }) => {
  return (
    <h2 className={styles.SectionHeading}>
      {text}
      <HeadingUnderline width={300}/>
    </h2>
  )
};

export default SectionHeading;
