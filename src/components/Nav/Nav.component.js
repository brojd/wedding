import React, {Component} from 'react';
import { Link, Events, scrollSpy, animateScroll } from 'react-scroll';
import styles from './Nav.stylesheet.css';

class Nav extends Component {

  componentDidMount() {
    window.scrollTo(0, 2);
  }

  render() {
    return (
      <nav className={styles.Nav}>
        <Link to='Home' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={-90}>Start</Link>
        <Link to='WhiteWedding' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={-90}>Ślub</Link>
        <Link to='WeddingParty' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={-90}>Wesele</Link>
        <Link to='Hotel' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={-90}>Hotel</Link>
        <Link to='Transport' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={-90}>Transport</Link>
        <Link to='Gifts' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={-90}>Prezenty</Link>
        <Link to='Contact' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={-90}>Kontakt</Link>
      </nav>
    )
  }
}

export default Nav;
