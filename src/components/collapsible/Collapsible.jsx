import React, { useState } from 'react';
import './Collapsible.css';
import { CSSTransition } from 'react-transition-group';

const Collapsible = ({ children, title }) => {
  const [collapse, setCollapse] = useState(false);
  const [headerStyle, setHeaderStyle] = useState('header round-header');

  return (
    <div className='disable-user-select'>
      <div
        onClick={() => {
          setCollapse(!collapse),
            setHeaderStyle(collapse ? 'header round-header' : 'header');
        }}
        className={headerStyle}
      >
        {title != null ? title : 'Answer'}
      </div>
      <CSSTransition
        in={collapse}
        timeout={400}
        classNames='fade'
        unmountOnExit
        onEnter={() => setCollapse(true)}
        onExited={() => setCollapse(false)}
      >
        <div key={'answer'} className='toggle-base'>
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Collapsible;
