import React, { Component }  from 'react';
import PropTypes from 'prop-types'
import styles from './Jumbotron.stylesheet.css';
import OuterJumbotron from '../../HOC/OuterJumbotron/OuterJumbotron.component';
import jumbo1 from './images/jumbo1.jpg';
import jumbo2 from './images/jumbo2.jpg';
import jumbo3 from './images/jumbo3.jpg';

class Jumbotron extends Component {

  render() {
    return (
      <section
        className={styles.Jumbotron}
      >
        <div className={styles.headingWrapper}>
          <span className={styles.heading}>
            {this.props.children}
            <hr className={styles.underlining} />
          </span>
        </div>
      </section>
    )
  }
}

Jumbotron.propTypes = {
  textIndex: PropTypes.number,
  jumbotron: PropTypes.object,
  children: PropTypes.element
}

const component = OuterJumbotron(Jumbotron, [jumbo1, jumbo2, jumbo3], 4200)

export default component;
