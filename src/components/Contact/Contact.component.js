import React, { PropTypes } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';
import styles from './Contact.stylesheet.css';
import { Element } from 'react-scroll';
import brideImg from './images/bride.png';
import groomImg from './images/groom.png';
import babyImg from './images/baby.png';

const Contact = ({ text, bridePhone, groomPhone }) => {
  return (
    <Element name='Contact'>
      <section className={styles.Contact}>
        <SectionHeading text='Kontakt' />
        <div className={styles.contentWrapper}>
          <SectionText text={text} />
          <section className={styles.contacts}>
            <article className={styles.singleContact}>
              <img src={brideImg} alt="bride" className={styles.photo}/>
              <div>{bridePhone}</div>
            </article>
            <article className={styles.singleContact}>
              <img src={babyImg} alt="groom" className={styles.photo} />
              <div>martadamianbroj@gmail.com</div>
            </article>
            <article className={styles.singleContact}>
              <img src={groomImg} alt="groom" className={styles.photo} />
              <div>{groomPhone}</div>
            </article>
          </section>
        </div>
      </section>
    </Element>
  )
};

Contact.propTypes = {
  text: PropTypes.string,
  bridePhotoUrl: PropTypes.string,
  groomPhotoUrl: PropTypes.string,
  bridePhone: PropTypes.string,
  groomPhone: PropTypes.string
};

export default Contact;
