import React, { useState } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Collapsible.css";

const Collapsible = ({ children, title }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div>
      <div onClick={() => setCollapse(!collapse)} className="header">
        {title != null ? title : "Answer"}
      </div>

      <Toggle hidden={collapse}>{children}</Toggle>
    </div>
  );
};

export const Toggle = ({ hidden, children }) => {
  return (
    <div>
      <TransitionGroup>
        {hidden ? (
          <CSSTransition
            classNames="fade"
            timeout={500}
          >
            <div key={"answer"} className="toggle-base">
              {children}
            </div>
          </CSSTransition>
        ) : (
          <div />
        )}
      </TransitionGroup>
    </div>
  );
};

export default Collapsible;


{/* <ReactCSSTransitionGroup
transitionName="toggle"
transitionEnterTimeout={300}
transitionLeaveTimeout={300}
>
{this.props.hidden ? (
  <div key={"answer"} className="toggle-base">
    {this.props.children}
  </div>
) : null}
</ReactCSSTransitionGroup> */}
