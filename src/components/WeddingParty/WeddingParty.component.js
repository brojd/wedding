import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';
import styles from './WeddingParty.stylesheet.css';

const WeddingParty = ({ videoUrl, text, videoPlayOn }) => {
  return (
    <section className={styles.WeddingParty}>
      <SectionHeading text='Wesele' />
      <SectionText text={text} />
      {
        videoPlayOn ?
        <iframe src={`${videoUrl}?autoplay=1`} className={styles.video}></iframe> :
        <iframe src={`${videoUrl}`} className={styles.video}></iframe>
      }
    </section>
  )
};

export default WeddingParty;
