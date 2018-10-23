import React, { Component } from "react";
import Intro from "./components/intro/Intro";
import Landing from "./components/landing/Landing";
import Demos from "./components/demo/Demos";
import Projects from "./components/projects/Projects";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Provider } from "./context";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    const tpl =
      "background-color:orange; border:1px solid black; font-size:10px; font-weight: bold;padding:3px 5px;color:";
    const tpl2 =
      "background-color:black; border:1px solid black; font-size:10px; font-weight: bold;padding:3px 5px;color:";
    console.log(
      `%c⚡Developed By%clazyparadise.com⚡`,
      tpl + "black",
      tpl2 + "orange"
    );
  }
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Route
              render={({ location }) => (
                <TransitionGroup
                  childFactory={child =>
                    React.cloneElement(child, {
                      classNames: "fade"
                    })
                  }
                >
                  <CSSTransition
                    key={location.key}
                    timeout={1000}
                    classNames="fade"
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Landing} />
                      <Route exact path="/intro" component={Intro} />
                      <Route exact path="/demos" component={Demos} />
                      <Route exact path="/projects" component={Projects} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
