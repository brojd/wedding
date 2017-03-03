import React, { Component } from 'react';
import Countdown from '../../components/Countdown/Countdown.component';

class CountdownContainer extends Component {

  constructor() {
    super();
    this.updateTimeRemaining = this.updateTimeRemaining.bind(this);
    this.state = {
      timeRemaining: 0
    }
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
    const daysRemaining = this.state.timeRemaining / 1000 / 60 / 60 / 24;
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

export default CountdownContainer;
