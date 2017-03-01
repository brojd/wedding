import React, {Component} from 'react';
import Contact from '../../components/Contact/Contact.component';

class ContactContainer extends Component {
  render() {
    return (
      <div>
        <Contact text={this.props.text} />
      </div>
    )
  }
}

export default ContactContainer;
