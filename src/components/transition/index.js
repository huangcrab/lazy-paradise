import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default ({ transition = "", duration = 0, _key, children }) => (
  <TransitionGroup
    childFactory={child =>
      React.cloneElement(child, { classnames: transition })
    }
  >
    <CSSTransition key={_key} timeout={duration} classNames={transition}>
      <div>{children}</div>
    </CSSTransition>
  </TransitionGroup>
);

export { default as SlideLeft } from "./SlideLeft";
export { default as SlideRight } from "./SlideRight";
export { default as FadeAppear } from "./FadeAppear";
