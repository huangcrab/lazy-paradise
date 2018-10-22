import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";

class Demo extends Component {
  render() {
    const { items, index, direction } = this.props;
    return (
      <TransitionGroup
        className="item-container"
        childFactory={child =>
          React.cloneElement(child, {
            classNames: direction === "right" ? "right" : "left"
          })
        }
      >
        <CSSTransition
          key={index}
          timeout={500}
          classNames={direction === "right" ? "right" : "left"}
        >
          <div className="display-item item">
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
  }
}

Demo.propTypes = {
  items: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired
};

export default Demo;
