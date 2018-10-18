import React, { Component } from "react";
import { Consumer } from "../../context";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Demo extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { items, index } = value;
          return (
            <TransitionGroup className="demo-container">
              <CSSTransition key={index} timeout={2000} classNames="fade">
                <div className="display-item demo active" id="demo-one">
                  <h2>{items[index].name}</h2>
                  <h3>
                    Demo {index + 1} / {items.length}
                  </h3>
                  <div className="icon-group">
                    <img title="Angular" src="assets/angular.png" />
                    <img title="MongoDB" src="assets/mongodb.png" />
                    <img title="Note.js" src="assets/node-dot-js.png" />
                    <img title="bootstrap" src="assets/bootstrap.png" />
                    <img title="heroku" src="assets/heroku.png" />
                    <img title="mlab" src="assets/mlab.png" />
                  </div>
                  <br />
                  <div className="wrapper">
                    <iframe className="scaled-frame" src="" />
                    <a
                      className="frame-overlay"
                      target="_blank"
                      href={items[index].link}
                    />
                  </div>
                </div>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      </Consumer>
    );
  }
}

export default Demo;
