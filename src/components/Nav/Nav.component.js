import React, {Component} from 'react';
import { Link } from 'react-scroll';

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to='Home' smooth={true} spy={true} duration={600}>Start</Link>
        <Link to='WhiteWedding' smooth={true} spy={true} duration={600}>Ślub</Link>
        <Link to='WeddingParty' smooth={true} spy={true} duration={600}>Wesele</Link>
        <Link to='Hotel' smooth={true} spy={true} duration={600}>Hotel</Link>
        <Link to='Transport' smooth={true} spy={true} duration={600}>Transport</Link>
        <Link to='Gifts' smooth={true} spy={true} duration={600}>Prezenty</Link>
        <Link to='Contact' smooth={true} spy={true} duration={600}>Kontakt</Link>
      </nav>
    )
  }
}

export default Nav;
