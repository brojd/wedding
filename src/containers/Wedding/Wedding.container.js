import React, {Component} from 'react';
import Header from '../../components/Header/Header.component';
import Home from '../../components/Home/Home.component';
import WhiteWedding from '../../components/WhiteWedding/WhiteWedding.component';
import WeddingParty from '../../components/WeddingParty/WeddingParty.component';
import Hotel from '../../components/Hotel/Hotel.component';
import Transport from '../../components/Transport/Transport.component';
import Gifts from '../../components/Gifts/Gifts.component';
import ContactContainer from '../Contact/Contact.container';
import { brideName, groomName, date, home, whiteWedding, weddingParty, hotel, transport } from '../../config';


class WeddingContainer extends Component {

  constructor() {
    super();
    this.state = {
      partyVideoOn: false,
      transportVideoOn: false
    };
  }

  componentDidMount() {
    window.onscroll = () => {
      if (
        window.scrollY / window.innerHeight > 1 &&
        window.scrollY / window.innerHeight < 2.9 &&
        !this.state.partyVideoOn
      ) {
        this.setState({ partyVideoOn: true });
      } else if (
        (window.scrollY / window.innerHeight < 1 || window.scrollY / window.innerHeight > 2.9)
        && this.state.partyVideoOn
      ) {
        this.setState({ partyVideoOn: false });
      }
      if (
        window.scrollY / window.innerHeight > 3 &&
        window.scrollY / window.innerHeight < 4.9 &&
        !this.state.transportVideoOn
      ) {
        console.log('on');
        this.setState({ transportVideoOn: true });
      } else if (
        (window.scrollY / window.innerHeight < 3 || window.scrollY / window.innerHeight > 4.9)
        && this.state.transportVideoOn
      ) {
        this.setState({ transportVideoOn: false });
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
        <WeddingParty videoUrl={weddingParty.videoUrl}
                      text={weddingParty.text}
                      videoPlayOn={this.state.partyVideoOn} />
        <Hotel imgUrl={hotel.imgUrl} text={hotel.text} />
        <Transport text={transport.text}
                   videoUrl={transport.videoUrl}
                   videoPlayOn={this.state.transportVideoOn} />
        <Gifts />
        <ContactContainer />
      </div>
    )
  }
}

export default WeddingContainer;
