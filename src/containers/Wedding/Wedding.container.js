import React, {Component} from 'react';
import Header from '../../components/Header/Header.component';
import Home from '../../components/Home/Home.component';
import WhiteWedding from '../../components/WhiteWedding/WhiteWedding.component';
import WeddingParty from '../../components/WeddingParty/WeddingParty.component';
import Hotel from '../../components/Hotel/Hotel.component';
import Transport from '../../components/Transport/Transport.component';
import Gifts from '../../components/Gifts/Gifts.component';
import Footer from '../../components/Footer/Footer.component';
import ContactContainer from '../Contact/Contact.container';
import { brideName, groomName, date, home, whiteWedding, weddingParty,
  hotel, transport, gifts, contact } from '../../config';


class WeddingContainer extends Component {

  constructor() {
    super();
    this.state = {
      partyVideoOn: false
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
              largeText={home.largeText}
              date={date} />
        <WhiteWedding imgUrl={whiteWedding.imgUrl} text={whiteWedding.text} />
        <WeddingParty videoUrl={weddingParty.videoUrl}
                      text={weddingParty.text}
                      videoPlayOn={this.state.partyVideoOn} />
        <Hotel imgUrl={hotel.imgUrl} text={hotel.text} />
        <Transport text={transport.text}
                   videoId={transport.videoId}
                   schedule={transport.schedule} />
        <Gifts text={gifts.text} imgUrl={gifts.imgUrl} />
        <ContactContainer text={contact.text}
                          bridePhotoUrl={contact.bridePhotoUrl}
                          groomPhotoUrl={contact.groomPhotoUrl}
                          bridePhone={contact.bridePhone}
                          groomPhone={contact.groomPhone} />
        <Footer text="Copyright 2017 Dominik Broj" />
      </div>
    )
  }
}

export default WeddingContainer;
