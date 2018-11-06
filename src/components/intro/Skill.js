import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const progress = keyframes`
  
  from {width:0%; }
  to {width:${props => props.number}0%; }
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
  margin-bottom: 5px;
  padding-left: 1px;
  width:${props => props.number}0%
  list-style: none;
  border-right: 2px solid white;
  animation: ${progress} 2.5s;
`;

class Skill extends Component {
  render() {
    return (
      <Container className="skills info-item">
        <Item className="field">
          <h3>Front-End</h3>
          <br />
          <ul>
            <List number="8">React</List>
            <List number="6">Angular</List>
            <List number="8">Bootstrap</List>
            <List number="8">JQuery</List>
            <List number="9">HTML</List>
            <List number="9">CSS</List>
          </ul>
        </Item>
        <Item className="field">
          <h3>Back-End</h3>
          <br />
          <ul>
            <List number="9">NodeJS</List>
            <List number="8">ExpressJS</List>
            <List number="9">PHP</List>
            <List number="10">MySQL</List>
            <List number="8">MongoDB</List>
          </ul>
        </Item>
        <Item className="field">
          <h3>Other</h3>
          <br />
          <ul>
            <List number="10">JAVA</List>
            <List number="9">C++</List>
            <List number="6"> Swift</List>
            <List number="10">Git</List>
          </ul>
        </Item>
      </Container>
    );
  }
}
export default Skill;
