import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';
import styles from './Transport.stylesheet.css';

const Transport = ({ text, videoUrl, videoPlayOn }) => {
  return (
    <section className={styles.Transport}>
      <SectionHeading text='Transport' />
      <SectionText text={text} />
      {
        videoPlayOn ?
          <iframe src={`${videoUrl}?controls=0&loop=1&start=7&autoplay=1`} className={styles.video}></iframe> :
          <iframe src={`${videoUrl}?controls=0&loop=1&start=7`} className={styles.video}></iframe>
      }
    </section>
  )
};

export default Transport;
