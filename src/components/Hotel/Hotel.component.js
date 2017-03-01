import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';
import styles from './Hotel.stylesheet.css';

const Hotel = ({ imgUrl, text }) => {
  return (
    <section className={styles.Hotel}>
      <SectionHeading text='Hotel' />
      <SectionText text={text} />
      <img src={imgUrl} alt="hotel" className={styles.img} />
    </section>
  )
};

export default Hotel;
