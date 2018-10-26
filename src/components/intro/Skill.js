import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const progress = keyframes`
  
  from {width:0%; }
  to {width:${props => props.number}; }
  `;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: left;
`;
const Item = styled.div`
  display: box;
`;
const List = styled.li`
  background: green;
  animation: ${progress} 2s;
`;

class Skill extends Component {
  render() {
    return (
      <Container className="skills info-item">
        <Item className="field">
          <h3>Front-End</h3>
          <br />
          <ul>
            <List number="50%">React</List>
            <li>Angular</li>
            <li>Bootstrap</li>
            <li>JQuery</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </Item>
        <Item className="field">
          <h3>Back-End</h3>
          <br />
          <ul>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </Item>
        <Item className="field">
          <h3>Other</h3>
          <br />
          <ul>
            <li>JAVA</li>
            <li>C++</li>
            <li>Swift</li>
            <li>Git</li>
          </ul>
        </Item>
      </Container>
    );
  }
}
export default Skill;
