import React, { PropTypes } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';
import styles from './Hotel.stylesheet.css';
import { Element } from 'react-scroll';

const Hotel = ({ imgUrl, text }) => {
  return (
    <Element name="Hotel">
      <section className={styles.Hotel}>
        <SectionHeading text='Hotel' />
        <div className={styles.contentWrapper}>
          <SectionText text={text} />
          <div className={styles.imgWrapper}>
            <img src={imgUrl} alt="hotel" className={styles.img} />
          </div>
        </div>
      </section>
    </Element>
  )
};

Hotel.propTypes = {
  imgUrl: PropTypes.string,
  text: PropTypes.string
};

export default Hotel;
