import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Collapsible.css";

const Collapsible = ({ children, title }) => {
  const [collapse, setCollapse] = useState(false);
  const [headerStyle, setHeaderStyle] = useState("header round-header");

  return (
    <div>
      <div
        onClick={() => {
          setCollapse(!collapse),
            setHeaderStyle(collapse ? "header round-header" : "header");
        }}
        className={headerStyle}
      >
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
          <CSSTransition classNames="fade" timeout={500}>
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
