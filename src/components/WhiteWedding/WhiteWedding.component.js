import React from 'react';
import styles from './WhiteWedding.stylesheet.css';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';

const WhiteWedding = ({ imgUrl, text }) => {
  return (
    <section className={styles.WhiteWedding}>
      <SectionHeading text="ślub" />
      <SectionText text={text} />
    </section>
  )
};

export default WhiteWedding;
