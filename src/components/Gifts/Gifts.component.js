import React, { PropTypes } from 'react';
import styles from './Gifts.stylesheet.css';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';
import { Element } from 'react-scroll';
import gifts from './images/gifts.png';

const Gifts = ({ text }) => {
  return (
    <Element name='Gifts'>
      <section className={styles.Gifts}>
        <SectionHeading text="Prezenty" />
        <div className={styles.contentWrapper}>
          <SectionText text={text} />
          <div className={styles.imgWrapper}>
            <img src={gifts} className={styles.img} alt="gifts" />
          </div>
        </div>
      </section>
    </Element>
  )
};

Gifts.propTypes = {
  imgUrl: PropTypes.string,
  text: PropTypes.string
};

export default Gifts;
