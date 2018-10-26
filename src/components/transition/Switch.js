import { createGlobalStyle, keyframes } from "styled-components";
import React, { Component } from "react";
import Transition from "./transition";

const transitionClassName = "switch";
const duration = 600;

const moveFromRight = keyframes`
from { transform: translateX(100%); }
`;
const scaleDown = keyframes`
to { opacity: 0; transform: scale(.8); }
`;

const Global = createGlobalStyle`
.${transitionClassName}-enter, .${transitionClassName}-exit {
  position: relative;
}
.${transitionClassName}-enter-active {
  animation: ${moveFromRight} ${duration}ms ease both;
  z-index: 2;
}
.${transitionClassName}-exit-active {
  animation: ${scaleDown} ${duration}ms ease both;
  z-index: 1;
}
`;

export default ({ transition = "", duration = 0, key, children }) => (
  <div>
    <Global />
    <Transition transition={transition} duration={duration} _key={key}>
      <div>{children}</div>
    </Transition>
  </div>
);
