import React, { Component, PropTypes } from 'react';
import Countdown from '../../components/Countdown/Countdown.component';

class CountdownContainer extends Component {
  render() {
    const daysRemaining = this.props.timeRemaining / 1000 / 60 / 60 / 24;
    const hoursRemaining = (daysRemaining - Math.floor(daysRemaining)) * 24;
    const minutesRemaining = (hoursRemaining - Math.floor(hoursRemaining)) * 60;
    const secondsRemaining = (minutesRemaining - Math.floor(minutesRemaining)) * 60;
    return (
      <div>
        <Countdown text='DNI' time={Math.floor(daysRemaining)} />
        <Countdown text='GODZINY' time={Math.floor(hoursRemaining)} />
        <Countdown text='MINUTY' time={Math.floor(minutesRemaining)} />
        <Countdown text='SEKUNDY' time={Math.floor(secondsRemaining)} />
      </div>
    )
  }
}

CountdownContainer.propTypes = {
  date: PropTypes.string
};

export default CountdownContainer;
