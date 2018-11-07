import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const flash = keyframes`
  
  50% {opacity:0; }
  `;

const Loader = styled.div`
  height: 100vh;
  width: 100vw;
  background: #000;
  display: flex;
  z-index: 1000;
  position: relative;
`;
const Item = styled.div`
  background: #fff;
  position: relative;
  height: 80px;
  width: 80px;
  border-radius: 20px;
  color: #000;
  font-size: 80px;
  padding-bottom: 5px;
  text-align: center;
  font-weight: bold;
  margin: auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  animation: ${flash} 0.5s ease infinite;
`;

class Loading extends Component {
  render() {
    return (
      <Loader>
        <Item>X</Item>
      </Loader>
    );
  }
}

export default Loading;
