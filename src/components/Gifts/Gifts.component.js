import React from 'react';
import styles from './Gifts.stylesheet.css';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';

const Gifts = ({ imgUrl, text }) => {
  return (
    <section className={styles.Gifts}>
      <SectionHeading text="Prezenty" />
      <div className={styles.contentWrapper}>
        <SectionText text={text} />
        <div className={styles.imgWrapper}>
          <img src={imgUrl} className={styles.img} alt="gifts" />
        </div>
      </div>
    </section>
  )
};

export default Gifts;
