import { createGlobalStyle } from "styled-components";

const transitionClassName = "SlideRight";
const duration = 500;

createGlobalStyle`
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

export default { transition: transitionClassName, duration };
