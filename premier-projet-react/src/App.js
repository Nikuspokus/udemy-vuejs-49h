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

  handleClick = () => {
    const famille = {...this.state.famille}
    famille.membre1.age += 1
    this.setState({ famille})
  };

  render() {
    const { titre } = this.props;
    const { famille } = this.state;
    return (
      <div className="App">
        <h1>{titre}</h1>
        {/* <a href="https://www.google.fr/" target="blank">test lien</a> */}
        <Membre 
          age={famille.membre1.age} 
          nom={famille.membre1.nom} />
        <Membre 
          age={famille.membre2.age} 
          nom={famille.membre2.nom} />
        <Membre 
          age={famille.membre3.age} 
          nom={famille.membre3.nom} />
        <Membre 
          age={famille.membre4.age} 
          nom={famille.membre4.nom} />
        <Membre 
          age={famille.membre5.age} 
          nom={famille.membre5.nom} >
          Je suis un garçon.
        </Membre>
        <button onClick={this.handleClick}>Vieillir</button>
      </div>
    );
  }
}

export default App;
