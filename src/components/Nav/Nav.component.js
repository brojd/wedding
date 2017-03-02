import React, {Component} from 'react';
import { Link } from 'react-scroll';
import styles from './Nav.stylesheet.css';

class Nav extends Component {

  componentDidMount() {
    window.scrollTo(0, 2);
  }

  render() {
    return (
      <nav className={styles.Nav}>
        <Link to='Home' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={-95}>Start</Link>
        <Link to='WhiteWedding' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={-95}>Ślub</Link>
        <Link to='WeddingParty' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={-95}>Wesele</Link>
        <Link to='Hotel' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={-95}>Hotel</Link>
        <Link to='Transport' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={-95}>Transport</Link>
        <Link to='Gifts' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={-95}>Prezenty</Link>
        <Link to='Contact' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={-95}>Kontakt</Link>
      </nav>
    )
  }
}

export default Nav;
