import React from 'react';
import styles from './SectionText.stylesheet.css';
import classNames from 'classnames';

const SectionText = ({ text }) => {
  return (
    <div className={classNames('container-fluid', styles.SectionText)}>
      <div className={classNames('col-md-6 col-md-offset-3', styles.textWrapper)}>
        <p className={styles.text}>
          {text}
        </p>
      </div>
    </div>
  )
};

export default SectionText;
