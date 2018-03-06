import React, { Component, PropTypes } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';
import styles from './WeddingParty.stylesheet.css';
import { Element } from 'react-scroll';

class WeddingParty extends Component {

  componentDidMount() {
    window.setTimeout(() => {
      new window.YT.Player('partyVideo', {
        videoId: this.props.videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          loop: 1,
          fs: 1,
          cc_load_policy: 0,
          iv_load_policy: 3,
          autohide: 1,
          start: 75
        },
        events: {
          onReady: (event) => {
            event.target.mute();
            setTimeout(() => event.target.playVideo(), 1000);
          },
          onStateChange: (event) => {
            if (event.data === 0) {
              event.target.seekTo(1);
            }
          }
        }
      });
    }, 1000);
  }

  render() {
    return (
      <Element name='WeddingParty'>
        <section className={styles.WeddingParty}>
          <SectionHeading text='Wesele' />
          <SectionText text={this.props.text} />
          <div id="partyVideo" className={styles.video}></div>
        </section>
      </Element>
    )
  }
}

WeddingParty.propTypes = {
  videoId: PropTypes.string,
  text: PropTypes.string
};

export default WeddingParty;
