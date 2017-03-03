import React, { PropTypes } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';
import styles from './WeddingParty.stylesheet.css';
import { Element } from 'react-scroll';
import { isAny } from '../../helpers/isMobile';

const WeddingParty = ({ videoUrl, text, videoPlayOn }) => {
  const WeddingPartyStyles = {
    background: isAny() ? 'linear-gradient(to bottom, #634730, #0e0a06)' : 'rgba(0, 0, 0, 0.55)'
  };
  return (
    <Element name='WeddingParty'>
      <section className={styles.WeddingParty} style={WeddingPartyStyles}>
        <SectionHeading text='Wesele' />
        <SectionText text={text} />
        {
          isAny() ?
            null :
            videoPlayOn ?
              <iframe src={`${videoUrl}?controls=0&loop=1&autoplay=1`} className={styles.video}></iframe> :
              <iframe src={`${videoUrl}?controls=0&loop=1`} className={styles.video}></iframe>
        }
      </section>
    </Element>
  )
};

WeddingParty.propTypes = {
  videoUrl: PropTypes.string,
  text: PropTypes.string,
  videoPlayOn: PropTypes.bool
};

export default WeddingParty;
