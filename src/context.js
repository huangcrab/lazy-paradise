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
        index: state.index === 0 ? action.payload - 1 : state.index - 1,
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
        media: "mean.gif",
        link: "https://warm-island-73436.herokuapp.com/",
        tech: ["Angular", "MongoDB", "NodeJs", "Bootstrap", "Heroku", "MLab"]
      },
      {
        id: 2,
        name: "Connector App",
        media: "mern.gif",
        link: "https://limitless-beach-24902.herokuapp.com/",
        tech: ["React", "MongoDB", "NodeJs", "Bootstrap", "Heroku", "MLab"]
      },
      {
        id: 3,
        name: "Client Panel App",
        media: "angular.gif",
        link: "https://clientpanel-3bd53.firebaseapp.com/",
        tech: ["Angular", "Firebase", "Bootstrap"]
      }
    ],
    projects: [
      {
        id: 1,
        name: "XMLtoVisio Converter - JAVA",
        date: "June 2017",
        description: `Xml to Visio Converter is a desktop application that generates thousands of Microsoft Visio files
        from XML
        file in less than a minutes, it traverse the xml file and translate it into Visio XML syntax,
        outputs
        them into .vsdx file, it’s able to create all the predefined shapes, links, and also hyper links
        into
        Visio files. It turns months of documentation work into a piece of cake.`
      },
      {
        id: 2,
        name: "Production Website",
        date: "Sept 2017",
        description: `A single page website for a Chinese immigration company, it uses multiple JavaScript libraries and
        Bootstrap,
        Animate.css to create some scrolling effects and animations. It has a contact form communicated
        with
        the firebase.`
      },
      {
        id: 3,
        name: "PokePixel - IOS",
        date: "Aug 2016",
        description: `PokePixel is a multi-page IOS app that calculates the IV and evolve value of a Pokémon from Pokemon
        GO, it
        takes the user input value outputs the perfect percentage of a Pokémon, so the player knows which
        Pokémon
        they should keep and invest on. It presents a collectionView of all the Pokémon’s, user can search
        the
        Pokémon by input the name or the id of the Pokemon.`
      },
      {
        id: 4,
        name: "XML Analyzer - JAVA",
        date: "Aug 2016",
        description: `XML Analyzer is a desktop application traverse the XML file generated from IBM Process Designer.
        Make the
        debug in IBM Process Designer at least 100 times faster, it can locate logic and syntax errors in
        thousands
        of processes in couple minutes, it also outputs the error logs with all the details of all the
        processes
        in the file.`
      },
      {
        id: 5,
        name: "URL Converter - JAVA",
        date: "Jan 2016",
        description: `URL Converter is a simple desktop application that encode and decodes a base64 coded website
        link, the
        application also can built links by specifying a list of fields and values. It saves the personal
        favorite
        links, so user can quickly load the previous made link by one click and launch it into web browser.`
      },
      {
        id: 6,
        name: "TeleCom ColorCode Calculator - Android",
        date: "March 2015",
        description: `An single view Android app calculates the telecommunication color code, automatically translate the
        line
        number to a color code(tip side color and ring side color) of the cable at the moment of typing,
        and
        vise versa. Help telecom technicians in the field to making their work more efficient and more
        accurate.`
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
