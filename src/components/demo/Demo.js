import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import uuid from "uuid";

class Demo extends Component {
  render() {
    const { items, index, direction } = this.props;
    return (
      <TransitionGroup
        className="item-container"
        childFactory={child =>
          React.cloneElement(child, {
            classNames: direction
          })
        }
      >
        <CSSTransition key={index} timeout={500} classNames={direction}>
          <div className="display-item item">
            <h1>
              <span>{items[index].name}</span>
            </h1>
            <h3>
              Demo {index + 1} / {items.length}
            </h3>
            <div className="icon-group">
              {items[index].tech.map(tech => {
                return (
                  <img
                    key={uuid()}
                    alt={tech}
                    title={tech}
                    src={`assets/logos/${tech.toLowerCase()}.png`}
                  />
                );
              })}
            </div>
            <br />
            <div className="wrapper">
              <iframe class="scaled-frame" src={items[index].link} />
              <a
                className="demo-link"
                target="_blank"
                rel="noopener noreferrer"
                href={items[index].link}
              >
                {" "}
              </a>
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
