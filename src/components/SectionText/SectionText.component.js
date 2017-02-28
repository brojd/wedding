import React from 'react';
import styles from './SectionText.stylesheet.css';
import classNames from 'classnames';

const SectionText = ({ text }) => {
  return (
    <div className='container-fluid'>
      <p className={classNames(styles.SectionText, 'col-md-6 col-md-offset-3')}>
        {text}
      </p>
    </div>
  )
};

export default SectionText;
