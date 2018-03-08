import React, { PropTypes } from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './Map.stylesheet.css';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';
import { Element } from 'react-scroll';
import config from '../../config.json';
import churchMarker from './marker-church.png';
import bedMarker from './marker-bed.png';

const ChurchMarker = () => <img src={churchMarker} />;
const BedMarker = () => <img src={bedMarker} />;

const Map = ({ text }) => {
  return (
    <Element name='Map'>
      <section className={styles.Map}>
        <SectionHeading text="Dojazd" />
        <div className={styles.contentWrapper}>
          <div className={styles.mapWrapper}>
            <GoogleMapReact
              defaultCenter={{ lat: 50.4464926, lng: 18.2620347 }}
              defaultZoom={13}
              bootstrapURLKeys={{
                key: config.googleMapsKey
              }}
            >
              <BedMarker
                lat={50.4537614}
                lng={18.2722056}
              />
              <ChurchMarker
                lat={50.4357951}
                lng={18.2779241}
              />
            </GoogleMapReact>
          </div>
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
