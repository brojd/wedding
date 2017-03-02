import React from 'react';
import styles from './Gifts.stylesheet.css';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';
import { Element } from 'react-scroll';

const Gifts = ({ imgUrl, text }) => {
  return (
    <Element name='Gifts'>
      <section className={styles.Gifts}>
        <SectionHeading text="Prezenty" />
        <div className={styles.contentWrapper}>
          <SectionText text={text} />
          <div className={styles.imgWrapper}>
            <img src={imgUrl} className={styles.img} alt="gifts" />
          </div>
        </div>
      </section>
    </Element>
  )
};

export default Gifts;
