import React, { useState, useEffect } from 'react';
import styles from './style.module.css';

const Collapsible = ({ children, title }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div>
      <div
        onClick={() => setCollapse(!collapse)}
        className={styles.header}
      >
        {title != null ? title : 'Answer'}
      </div>
      {collapse ? <div className={styles.content}>{children}</div> : null}
    </div>
  );
};

export default Collapsible;
