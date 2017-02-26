import React from 'react';
import styles from './WhiteWedding.stylesheet.css';
import classnames from 'classnames';

const WhiteWedding = ({ imgUrl, text }) => {
  return (
    <section className={classnames(styles.WhiteWedding, "container-fluid")}>
      <section className={classnames(styles.textSection, "col-md-6")}>
        text section
      </section>
      <section className={classnames(styles.imgSection, "col-md-6")}>
        <img src={imgUrl} className={styles.img}/>
      </section>
    </section>
  )
};

export default WhiteWedding;
