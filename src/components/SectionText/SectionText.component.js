import React, { PropTypes } from 'react';
import styles from './SectionText.stylesheet.css';
import classNames from 'classnames';

const SectionText = ({ text, height }) => {
  return (
    <div
      className={classNames('container-fluid', styles.SectionText)}
      style={{ height: height || '' }}
    >
      <div className={classNames('col-md-6 col-md-offset-3', styles.textWrapper)}>
        {
          Array.isArray(text) ?
          text.map(chunk => (
            <p className={styles.chunk}>
              {chunk}
            </p>
          ))
          :
          <p className={styles.text}>
            {text}
          </p>
        }
      </div>
    </div>
  )
};

SectionText.propTypes = {
  text: PropTypes.string,
  height: PropTypes.string
};

export default SectionText;
