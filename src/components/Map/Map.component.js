import React, { PropTypes } from 'react';
import styles from './Map.stylesheet.css';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import { Element } from 'react-scroll';
import config from '../../config.json';

const Map = ({ text }) => {
  return (
    <Element name='Map'>
      <section className={styles.Map}>
        <SectionHeading text="Dojazd" />
        <div className={styles.contentWrapper}>
          <iframe
            src={`https://www.google.pl/maps/embed/v1/directions?origin=Klucz,+Polska&destination=Park+Miniatur+Olszowa&language=pl&key=${config.googleMapsKey}`}
            allowFullScreen
            height="100%"
            width="100%"
          />
        </div>
      </section>
    </Element>
  )
};

Map.propTypes = {
  imgUrl: PropTypes.string,
  text: PropTypes.string
};

export default Map;
