import React, { Component } from "react";
import { createGlobalStyle, keyframes } from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const transitionClassName = "switch";
const duration = 600;

const Global = createGlobalStyle`
.${transitionClassName}-enter {
    transform: translate(120%);
  }
  .${transitionClassName}-enter.${transitionClassName}-enter-active {
    transform: translate(0);
    transition: transform ${duration}ms linear;
  }
  
  /* exit */
  .${transitionClassName}-exit {
    transform: translate(0);
  }
  .${transitionClassName}-exit.${transitionClassName}-exit-active {
    transform: translate(-120%);
    transition: transform ${duration}ms linear;
  }
`;

export default class Fade extends Component {
  render() {
    const { key, children } = this.props;
    return (
      <div>
        <Global />
        <TransitionGroup
          childFactory={child =>
            React.cloneElement(child, {
              classNames: transitionClassName
            })
          }
        >
          <CSSTransition
            key={key}
            timeout={duration}
            classNames={transitionClassName}
          >
            <div>{children}</div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}
