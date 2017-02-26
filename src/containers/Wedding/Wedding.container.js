import React, {Component} from 'react';
import Home from '../../components/Home/Home.component';
import WhiteWedding from '../../components/WhiteWedding/WhiteWedding.component';
import WeddingParty from '../../components/WeddingParty/WeddingParty.component';
import Hotel from '../../components/Hotel/Hotel.component';
import Transport from '../../components/Transport/Transport.component';
import Gifts from '../../components/Gifts/Gifts.component';
import ContactContainer from '../Contact/Contact.container';
import { home, whiteWedding } from '../../config';


class WeddingContainer extends Component {
  render() {
    return (
      <div>
        <Home brideName={home.brideName}
              groomName={home.groomName}
              date={home.date}
              backgroundUrl={home.backgroundUrl} />
        <WhiteWedding imgUrl={whiteWedding.imgUrl} text={whiteWedding.text} />
        <WeddingParty />
        <Hotel />
        <Transport />
        <Gifts />
        <ContactContainer />
      </div>
    )
  }
}

export default WeddingContainer;
