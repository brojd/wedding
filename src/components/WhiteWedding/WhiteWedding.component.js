import React, { PropTypes } from 'react';
import styles from './WhiteWedding.stylesheet.css';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';
import { Element } from 'react-scroll';
import churchImg from './images/kosciol.png';

const WhiteWedding = ({ text }) => {
  return (
    <Element name="WhiteWedding" id="WhiteWedding">
      <section className={styles.WhiteWedding}>
        <SectionHeading text="ślub" />
        <div className={styles.contentWrapper}>
          <SectionText text={text} />
          <div className={styles.imgWrapper}>
            <img src={churchImg} className={styles.img} alt="church" />
          </div>
        </div>
      </section>
    </Element>
  )
};

WhiteWedding.propTypes = {
  imgUrl: PropTypes.string,
  text: PropTypes.string
};

export default WhiteWedding;
