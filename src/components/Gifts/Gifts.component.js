import React from 'react';
import styles from './Gifts.stylesheet.css';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';

const Gifts = ({ imgUrl, text }) => {
  return (
    <section className={styles.Gifts}>
      <SectionHeading text="Prezenty" />
      <SectionText text={text} />
      <img src={imgUrl} className={styles.img} alt="gifts" />
    </section>
  )
};

export default Gifts;
