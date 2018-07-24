import React, { Component } from 'react';
import ItemList from './component/ItemList';
import logo from './logo.svg';
import './App.css';
import AddNewItem from './component/AddNewItem';
import { AppBar, Toolbar } from '@material-ui/core';


const items = [
  { title: 'Mateo', details: 'Que grande'},
  { title: 'Brian', details: 'Ojo con el celu'},
  { title: 'AleG', details: '¿Alguna crítica?'},
  { title: 'Mateo2', details: 'Que grande'},
  { title: 'Brian2', details: 'Ojo con el celu'},
  { title: 'AleG2', details: '¿Alguna crítica?'},
];

class App extends Component {

  state = {
    items: items
  };

  onAddItem = ({title, details}) => {
    console.log(`Adding item ${title} - ${details}`);
    this.setState({ items: [ ...items, {title, details}] });
  }

  render() {
    return (
      
      <div className="App">
        <AppBar position="static" >
          <Toolbar>Aplicación de aprendizaje</Toolbar>
        </AppBar>  
        <AddNewItem onAddItem={this.onAddItem} ></AddNewItem>        
        <ItemList items={this.state.items}></ItemList>

      </div>
    );
  }
}

export default App;
