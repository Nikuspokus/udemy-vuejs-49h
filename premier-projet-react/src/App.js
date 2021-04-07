import React, { Component } from "react"
import "./App.css";
import Membre from './components/Membre'

class App extends Component {
  render() {
    const { titre } = this.props
    return (
      <div className="App">
        <h1>{ titre }</h1>
        {/* <a href="https://www.google.fr/" target="blank">test lien</a> */}
        <Membre nom='Nicolas'/>
        <Membre nom='Caroline'/>
        <Membre nom='Inès'/>
        <Membre nom='Elise'/>
        <Membre nom='Hugo'/>
      </div>
    );
  }
}

export default App;

 
