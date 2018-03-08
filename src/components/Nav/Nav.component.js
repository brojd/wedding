import React, { Component } from 'react';
import { Link } from 'react-scroll';
import styles from './Nav.stylesheet.css';
import classNames from 'classnames';

class Nav extends Component {

  constructor() {
    super();
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      dropdownVisible: false
    };
  }

  toggleDropdown() {
    this.setState({ dropdownVisible: !this.state.dropdownVisible });
  }

  componentDidMount() {
    window.scrollTo(0, 1);
  }

  render() {
    const navStyles = {
      maxHeight: !this.state.dropdownVisible && window.innerWidth < 980 ? 0 : '300px'
    };
    const openStyles = {
      opacity: this.state.dropdownVisible ? 0 : 1,
      transition: 'opacity 0.5s ease-out'
    };
    const closeStyles = {
      opacity: this.state.dropdownVisible ? 1 : 0,
      transition: 'opacity 0.5s ease-out',
      position: 'relative',
      right: '16px',
      top: '4px'
    };
    const offset = 0;
    return (
      <span>
        <button type='button' onClick={this.toggleDropdown} className={styles.dropdownButton}>
          <span className="glyphicon glyphicon-align-justify" aria-hidden="true" style={openStyles}></span>
          <span className="glyphicon glyphicon-menu-up" aria-hidden="true" style={closeStyles}></span>
        </button>
        <nav className={classNames(styles.Nav)} style={navStyles}>
          <Link to='Home' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={offset}>Start</Link>
          <Link to='WhiteWedding' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={50}>Ślub</Link>
          <Link to='WeddingParty' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={50}>Wesele</Link>
          <Link to='Hotel' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={50}>Hotel</Link>
          {/*<Link to='Transport' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={50}>Transport</Link>*/}
          <Link to='Gifts' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={50}>Prezenty</Link>
          <Link to='Contact' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={50}>Kontakt</Link>
          <Link to='Map' smooth={true} spy={true} duration={600} className={styles.link} activeClass={styles.currentLink} offset={50}>Dojazd</Link>
        </nav>
      </span>
    )
  }
}

export default Nav;
