import React, { Component } from 'react';
import MyCardItem from './component/MyCardItem';
import logo from './logo.svg';
import './App.css';

const items = [
  { title: 'Mateo', details: 'Que grande'},
  { title: 'Brian', details: 'Ojo con el celu'},
  { title: 'AleG', details: '¿Alguna crítica?'},
  { title: 'Mateo2', details: 'Que grande'},
  { title: 'Brian2', details: 'Ojo con el celu'},
  { title: 'AleG2', details: '¿Alguna crítica?'},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">App Demo</h1>
        </header>
        <div className="main-list">
          {
            items.map(({ title, details }) => (
              <MyCardItem key={title} title={title} details={details}></MyCardItem>
            ))
          }
        </div>
        
      </div>
    );
  }
}

export default App;
