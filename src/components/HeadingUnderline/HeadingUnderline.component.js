import React from 'react';
import styles from './HeadingUnderline.stylesheet.css';
import classNames from 'classnames';

const HeadingUnderline = ({ width }) => {
  const lineStyle = {
    width: width / 2
  };
  return (
    <div className={styles.HeadingUnderline}>
      <div style={lineStyle} className={styles.line}></div>
      <span className={classNames("glyphicon glyphicon-grain", styles.icon)}></span>
      <div style={lineStyle} className={styles.line}></div>
    </div>
  )
};

export default HeadingUnderline;
