import React, { Component, PropTypes } from 'react';
import styles from './Home.stylesheet.css';
import { Element } from 'react-scroll';
import CountdownContainer from '../../containers/Countdown/Countdown.container';
import Jumbotron from '../../components/Jumbotron/Jumbotron.component';
import logo from './images/logo.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.updateTimeRemaining = this.updateTimeRemaining.bind(this);
    this.state = {
      timeRemaining: 0
    };
  }

  updateTimeRemaining(currentDate, weddingDate) {
    const timeRemaining = weddingDate.getTime() - currentDate.getTime();
    this.setState({ timeRemaining: timeRemaining });
  }

  componentDidMount() {
    this.updateTimeRemaining(new Date(), new Date(this.props.date));
    window.setInterval(() => this.updateTimeRemaining(new Date(), new Date(this.props.date)), 1000);
  }

  componentWillUnmount() {
    window.clearInterval();
  }

  render() {
    const homeStyle = {
      background: 'url(' + this.props.backgroundUrl + ') fixed center no-repeat',
      backgroundSize: 'cover'
    };

    return (
      <Element name='Home'>
        <Jumbotron>
          <section className={styles.Home} style={homeStyle}>
            <div className={styles.backgroundWrapper}>
              <div className={styles.textWrapper}>
                <img src={logo} alt="logo" className={styles.logo} />
                <div className={styles.countdownWrapper}>
                  <h3 className={styles.countdownHeading}>Pozostało:</h3>
                  <CountdownContainer date={this.props.date} timeRemaining={this.state.timeRemaining} />
                </div>
              </div>
            </div>
          </section>
        </Jumbotron>
      </Element>
    )
  }
};

Home.propTypes = {
  backgroundUrl: PropTypes.string,
  date: PropTypes.string
};

export default Home;
