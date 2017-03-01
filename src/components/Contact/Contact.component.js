import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';
import styles from './Contact.stylesheet.css';

const Contact = ({ text }) => {
  return (
    <section className={styles.Contact}>
      <SectionHeading text='Kontakt' />
      <SectionText text={text}/>
    </section>
  )
};

export default Contact;
