import React, { Component } from 'react';
import Card from './component/Card';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hola to Oke</h1>
        </header>
        <Card title='Hola Mateo' details='Grupo de estudio!'></Card>
      </div>
    );
  }
}

export default App;
