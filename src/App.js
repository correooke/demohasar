import React, { Component } from 'react';
import './App.css';
import MyCardList from './component/MyCardList';
import AddNewEntry from './component/AddNewEntry';
import { AppBar, Toolbar } from '@material-ui/core';

const items = [
  { code: 0, title: 'Mateo', 
    details: {
      source: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
      name: "Juan", 
      last: "Barrio",
      email: "jbarrio@hasar.com",
  }},
  { code: 1, title: 'Brian', details: {
    source: 'https://randomuser.me/api/portraits/thumb/men/66.jpg',
    name: "Brayatan", 
    last: "Haberkuk",
    email: "brian@hasar.com",
  }},
  { code: 2, title: 'Juan', details: {
    source: 'https://randomuser.me/api/portraits/thumb/men/67.jpg',
    name: "Juan", 
    last: "Barrio Nuevo",
    email: "brian@hasar.com",
  }},
];

class App extends Component {
  
  state = {
    items,
    selectedItem: null, 
  };

  onAddItemClick = ({ title, details }) => {
    console.log(`Titulo: ${title} Detalle: ${details}`);
    const code = this.state.items.length;
    this.setState({ items: [ ...this.state.items, { code, title, details }] })
  }

  onEditItemClick = ({ title, details }) => {
    console.log(`Finalizó la edición Titulo: ${title} Detalle: ${details}`);

    //this.setState({ items: [ ...this.state.items, { code, title, details }] })
    this.setState({ selectedItem: null });
  }  

  onEditItem = code => {
    console.log("Editando Item " + code);
    this.setState({ selectedItem: this.state.items.find( item => item.code === code) });
  }

  onDelItem = code => {
    console.log("Eliminando Item " + code);
    const items = this.state.items.filter( item => item.code !== code);

    this.setState({ items });
  }

  onShowItem = code => {
    console.log("Ver más " + code);
  }

  render() {
    
    return (
      <div className="App">
        <AppBar position="static" >
          <Toolbar>Aplicacion de Estudio</Toolbar>
        </AppBar>
        <AddNewEntry 
          onAddItem={this.onAddItemClick}
          onEditItem={this.onEditItemClick}
          selectedItem={this.state.selectedItem}
        >
        </AddNewEntry>
        <MyCardList 
          items={this.state.items}
          onClickEdit={this.onEditItem}
          onClickDel={this.onDelItem}
          onClickShow={this.onShowItem}></MyCardList>
        
      </div>
    );
  }
}

export default App;
