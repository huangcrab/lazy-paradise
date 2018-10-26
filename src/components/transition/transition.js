import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const childFactoryCreator = props => child => React.cloneElement(child, props);

export default ({ transition = "", duration = 0, _key, children }) => (
  <TransitionGroup
    childFactory={childFactoryCreator({
      classNames: transition
    })}
  >
    <CSSTransition key={_key} timeout={duration}>
      <div>{children}</div>
    </CSSTransition>
  </TransitionGroup>
);
