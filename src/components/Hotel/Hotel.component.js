import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';
import styles from './Hotel.stylesheet.css';

const Hotel = ({ imgUrl, text }) => {
  return (
    <section className={styles.Hotel}>
      <SectionHeading text='Hotel' />
      <div className={styles.contentWrapper}>
        <SectionText text={text} />
        <div className={styles.imgWrapper}>
          <img src={imgUrl} alt="hotel" className={styles.img} />
        </div>
      </div>
    </section>
  )
};

export default Hotel;
