import React, { Component } from "react";

const Context = React.createContext();
const Reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_ITEM":
      return {
        ...state,
        index: state.index >= action.payload - 1 ? 0 : state.index + 1,
        direction: "right"
      };
    case "PREV_ITEM":
      return {
        ...state,
        index: state.index <= 0 ? action.payload - 1 : state.index - 1,
        direction: "left"
      };
    case "CLEAR_INDEX":
      return {
        ...state,
        index: 0,
        direction: ""
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    demos: [
      {
        id: 1,
        name: "Authentication App",
        link: "https://warm-island-73436.herokuapp.com/",
        tech: ["Angular", "MongoDB", "Node.js", "Bootstrap", "Heroku", "MLab"]
      },
      {
        id: 2,
        name: "Connector App",
        link: "https://limitless-beach-24902.herokuapp.com/",
        tech: ["React", "MongoDB", "Node.js", "Bootstrap", "Heroku", "MLab"]
      },
      {
        id: 3,
        name: "Client Panel App",
        link: "https://clientpanel-3bd53.firebaseapp.com/",
        tech: ["Angular", "Firebase", "Bootstrap"]
      }
    ],
    projects: [
      {
        id: 1,
        name: "Authentication App",
        date: "Aug 16",
        description: `ML Analyzer is a desktop application traverse the XML file generated from IBM Process Designer.
      Make the
      debug in IBM Process Designer at least 100 times faster, it can locate logic and syntax errors in
      thousands
      of processes in couple minutes, it also outputs the error logs with all the details of all the
      processes
      in the file.`
      },
      {
        id: 2,
        name: "22222222222",
        date: "Aug 18",
        description: `ML Analyzer is a desktop application traverse the XML file generated from IBM Process Designer.
      Make the
      debug in IBM Processs Designer at least 100 times faster, it can locate logic and syntax errors in
      thousands
      of processes in couple minutes, it also outputs the error logs with all the details of all the
      processes
      in the file.`
      },
      {
        id: 3,
        name: "333333333",
        date: "Aug 19",
        description: `ML Analyzer is a desktop application traverse the XML file generated from IBM Process Designer.
      Make the
      debug in IBM Process Designer at least 100 times faster, it can locate logic and syntax errors in
      thousands
      of processes in couple minutes, it also outputs the error logs with all the details of all the
      processes
      in the file.`
      }
    ],
    index: 0,
    direction: "",
    dispatch: action => {
      this.setState(state => Reducer(state, action));
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
