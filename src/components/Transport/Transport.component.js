import React, { Component } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading.component';
import SectionText from '../SectionText/SectionText.component';
import TransportSchedule from '../TransportSchedule/TransportSchedule.component';
import styles from './Transport.stylesheet.css';

class Transport extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    window.onYouTubeIframeAPIReady = () => {
      let player;
      player = new window.YT.Player('transportVideo', {
        videoId: this.props.videoId, // YouTube Video ID
        playerVars: {
          autoplay: 1,        // Auto-play the video on load
          controls: 0,        // Show pause/play buttons in player
          showinfo: 0,        // Hide the video title
          modestbranding: 1,  // Hide the Youtube Logo
          loop: 1,            // Run the video in a loop
          fs: 1,              // Hide the full screen button
          cc_load_policy: 0, // Hide closed captions
          iv_load_policy: 3,  // Hide the Video Annotations
          autohide: 1,         // Hide video controls when playing
          start: 7,
          end: 210
        },
        events: {
          onReady: (event) => {
            event.target.mute();
          },
          onStateChange: (event) => {
            if (event.data === 0) {
              event.target.seekTo(7);
            }
          }
        }
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('onYouTubeIframeAPIReady');
  }

  render() {
    return (
      <section className={styles.Transport}>
        <SectionHeading text='Transport' />
        <SectionText text={this.props.text} />
            <div id="transportVideo" className={styles.video}></div>
        <TransportSchedule schedule={this.props.schedule} />
      </section>
    )
  }
};

export default Transport;
