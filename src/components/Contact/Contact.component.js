import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';
import styles from './Contact.stylesheet.css';
import { Element } from 'react-scroll';

const Contact = ({ text, bridePhotoUrl, groomPhotoUrl, bridePhone, groomPhone }) => {
  return (
    <Element name='Contact'>
      <section className={styles.Contact}>
        <SectionHeading text='Kontakt' />
        <div className={styles.contentWrapper}>
          <SectionText text={text} />
          <section className={styles.contacts}>
            <article className={styles.singleContact}>
              <img src={bridePhotoUrl} alt="bride_photo" className={styles.photo}/>
              <div>{bridePhone}</div>
            </article>
            <article className={styles.singleContact}>
              <img src={groomPhotoUrl} alt="groom_photo" className={styles.photo} />
              <div>{groomPhone}</div>
            </article>
          </section>
        </div>
      </section>
    </Element>
  )
};

export default Contact;
