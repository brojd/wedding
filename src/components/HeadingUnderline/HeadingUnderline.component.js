import React from 'react';
import styles from './HeadingUnderline.stylesheet.css';
import classNames from 'classnames';

const HeadingUnderline = ({ width }) => {
  const lineStyle = {
    width: window.innerWidth > 700 ? width / 2 : width / 3.8
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
