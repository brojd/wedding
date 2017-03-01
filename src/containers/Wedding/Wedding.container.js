import React, {Component} from 'react';
import Header from '../../components/Header/Header.component';
import Home from '../../components/Home/Home.component';
import WhiteWedding from '../../components/WhiteWedding/WhiteWedding.component';
import WeddingParty from '../../components/WeddingParty/WeddingParty.component';
import Hotel from '../../components/Hotel/Hotel.component';
import Transport from '../../components/Transport/Transport.component';
import Gifts from '../../components/Gifts/Gifts.component';
import ContactContainer from '../Contact/Contact.container';
import { brideName, groomName, date, home, whiteWedding, weddingParty, hotel } from '../../config';


class WeddingContainer extends Component {

  constructor() {
    super();
    this.state = {
      videoPlayOn: false
    };
  }

  componentDidMount() {
    window.onscroll = () => {
      if (
        window.scrollY / window.innerHeight > 1 &&
        window.scrollY / window.innerHeight < 2.9 &&
        !this.state.videoPlayOn
      ) {
        this.setState({ videoPlayOn: true });
      } else if (
        (window.scrollY / window.innerHeight < 1 || window.scrollY / window.innerHeight > 2.9)
        && this.state.videoPlayOn
      ) {
        this.setState({ videoPlayOn: false });
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('onscroll');
  }

  render() {
    return (
      <div>
        <Header brideName={brideName}
                groomName={groomName}
                date={date} />
        <Home backgroundUrl={home.backgroundUrl}
              smallText={home.smallText}
              largeText={home.largeText} />
        <WhiteWedding imgUrl={whiteWedding.imgUrl} text={whiteWedding.text} />
        <WeddingParty videoUrl={weddingParty.videoUrl} text={weddingParty.text} videoPlayOn={this.state.videoPlayOn} />
        <Hotel imgUrl={hotel.imgUrl} text={hotel.text} />
        <Transport />
        <Gifts />
        <ContactContainer />
      </div>
    )
  }
}

export default WeddingContainer;
