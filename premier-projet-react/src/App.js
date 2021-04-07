import React, { Component } from "react";
import "./App.css";
import Membre from "./components/Membre";

const famille = {
  membre1: {
    nom: "Nicolas",
    age: 35,
  },
  membre2: {
    nom: "Caroline",
    age: 35,
  },
  membre3: {
    nom: "Inès",
    age: 7,
  },
  membre4: {
    nom: "Elise",
    age: 1,
  },
  membre5: {
    nom: "Hugo",
    age: 1,
  },
};

class App extends Component {
  state = {
    famille,
  };

  handleClick = () => console.log('Click');

  render() {
    const { titre } = this.props;
    const { famille } = this.state;
    return (
      <div className="App">
        <h1>{titre}</h1>
        {/* <a href="https://www.google.fr/" target="blank">test lien</a> */}
        <Membre nom={famille.membre1.nom} />
        <Membre nom={famille.membre2.nom} />
        <Membre nom={famille.membre3.nom} />
        <Membre nom={famille.membre4.nom} />
        <Membre nom={famille.membre5.nom}>Je suis un garçon.</Membre>
        <button onClick={this.handleClick}>Vieillir</button>
      </div>
    );
  }
}

export default App;
