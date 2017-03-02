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
        <Link to='Home' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink}>Start</Link>
        <Link to='WhiteWedding' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink}>Ślub</Link>
        <Link to='WeddingParty' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink}>Wesele</Link>
        <Link to='Hotel' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink}>Hotel</Link>
        <Link to='Transport' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink}>Transport</Link>
        <Link to='Gifts' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink}>Prezenty</Link>
        <Link to='Contact' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink}>Kontakt</Link>
      </nav>
    )
  }
}

export default Nav;
