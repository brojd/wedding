import React from 'react';
import styles from './WhiteWedding.stylesheet.css';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';

const WhiteWedding = ({ imgUrl, text }) => {
  const imgStyle = {
    background: 'url(' + imgUrl + ') center no-repeat'
  };
  return (
    <section className={styles.WhiteWedding}>
      <SectionHeading text="ślub" />
      <SectionText text={text} />
      <div className={styles.imgWrapper}>
        <div style={imgStyle} className={styles.img}/>
      </div>
    </section>
  )
};

export default WhiteWedding;
