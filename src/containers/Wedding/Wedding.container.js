import React, {Component} from 'react';
import WhiteWedding from '../../components/WhiteWedding/WhiteWedding.component';
import WeddingParty from '../../components/WeddingParty/WeddingParty.component';
import Hotel from '../../components/Hotel/Hotel.component';
import Transport from '../../components/Transport/Transport.component';
import Gifts from '../../components/Gifts/Gifts.component';
import ContactContainer from '../Contact/Contact.container';


class WeddingContainer extends Component {
  render() {
    return (
      <div>
        <WhiteWedding />
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
