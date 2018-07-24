import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyCardList from './component/MyCardList';
import AddNewEntry from './component/AddNewEntry';
import { AppBar, Toolbar } from '@material-ui/core';

const items = [
  { code: 0, title: 'Mateo', details: 'Que grande'},

];

class App extends Component {
  
  state = {
    items,
  };

  onAddItemClick = ({ title, details }) => {
    console.log(`Titulo: ${title} Detalle: ${details}`);
    const code = this.state.items.length;
    this.setState({ items: [ ...this.state.items, { code, title, details }] })
  }

  render() {
    
    return (
      <div className="App">
        <AppBar position="static" >
          <Toolbar>Aplicacion de Estudio</Toolbar>
        </AppBar>
        <AddNewEntry onAddItem={this.onAddItemClick}></AddNewEntry>
        <MyCardList items={this.state.items}></MyCardList>
        
      </div>
    );
  }
}

export default App;
