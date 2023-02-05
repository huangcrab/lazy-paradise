import React, { Component } from 'react';

const Context = React.createContext();
const Reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT_ITEM':
      return {
        ...state,
        index: state.index >= action.payload - 1 ? 0 : state.index + 1,
        direction: 'right',
      };
    case 'PREV_ITEM':
      return {
        ...state,
        index: state.index === 0 ? action.payload - 1 : state.index - 1,
        direction: 'left',
      };
    case 'CLEAR_INDEX':
      return {
        ...state,
        index: 0,
        direction: '',
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    demos: [],
    projects: [],
    index: 0,
    direction: '',
    dispatch: (action) => {
      this.setState((state) => Reducer(state, action));
    },
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
