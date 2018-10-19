import React, { Component } from "react";
import Loading from "./components/layout/Loading";
import Landing from "./components/landing/Landing";
import Demos from "./components/demo/Demos";
import Projects from "./components/projects/Projects";

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
      "%c⚡Developed By" + `%clazyparadise.com⚡`,
      tpl + "black",
      tpl2 + "orange"
    );
  }
  render() {
    return (
      <Provider>
        <div className="App">
          {/* <Demos /> */}
          <Projects />
        </div>
      </Provider>
    );
  }
}

export default App;
