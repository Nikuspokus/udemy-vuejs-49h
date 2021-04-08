import React, { Component } from "react";
import "./App.css";
import Membre from "./components/Membre";
import Button from "./components/Button";

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
  membre6: {
    nom: "Nesquik",
    age: 3,
  },
};

class App extends Component {
  state = {
    famille,
    isShow: false,
  };

  handleClick = (num) => {
    const famille = { ...this.state.famille };
    famille.membre1.age += num;
    this.setState({ famille });
  };
  handleChange = (event) => {
    const famille = { ...this.state.famille };
    const nom = event.target.value;
    console.log(nom);
    famille.membre1.nom = nom;
    this.setState({ famille });
  };

  handleChange2 = (event) => {
    const famille = { ...this.state.famille };
    const nom = event.target.value;
    famille.membre2.nom = nom;
    this.setState({ famille });
  };

  handleShowDescription = () => {
    const isShow = !this.state.isShow;
    this.setState({ isShow });
  };

  render() {
    const { titre } = this.props;
    const { famille, isShow } = this.state;

    let description = null

    if (isShow) {
      description = <strong>Je suis un garçon. </strong>
    } 
    // Object.keys permet de trasformer en tableu de clé
    const liste = Object.keys(famille)
    // pour boucler autour d'un tableau le plus simple est de faire un "map"
    .map(membre => (
      <Membre 
      age={famille[membre].age} 
      nom={famille[membre].nom} />
    ))
    console.log(liste);

    return (
      <div className="App">
        <h1>{titre}</h1>
        <input
          value={famille.membre1.nom}
          onChange={this.handleChange}
          type="text"
        />
        { liste }
        {/* {<Membre age={famille.membre5.age} nom={famille.membre5.nom}>
          { description }
          <button onClick={this.handleShowDescription}>
            {isShow ? "Cacher" : "Montrer"}
          </button>
        </Membre>} */}
        <Button vieillir={() => this.handleClick(2)} />
      </div>
    );
  }
}

export default App;
