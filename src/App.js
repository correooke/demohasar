import React, { Component } from 'react';
import './App.css';
import MyCardList from './component/MyCardList';
import AddNewEntry from './component/AddNewEntry';
import { AppBar, Toolbar, CircularProgress } from '@material-ui/core';
import { Route, Switch, withRouter } from 'react-router-dom';

import uuid from 'uuid/v1';
import ShowUser from './component/ShowUser';
import ShowImage from './component/ShowImage';
import transform from './services/transform';

const items = null;

class App extends Component {
  
  state = {
    items,
    selectedItem: null, 
  };

  onAddItemClick = ({ title, details }) => {
    console.log(`Titulo: ${title} Detalle: ${details}`);
    const code = uuid();
    this.setState({ items: [ ...this.state.items, { code, title, details }] })
  }

  onEditItemClick = ({ code, title, details }) => {
    console.log(`Finalizó la edición Titulo: ${title} Detalle: ${details}`);

    //this.setState({ items: [ ...this.state.items, { code, title, details }] })
    const items = this.state.items.filter( item => item.code !== code);

    this.setState({ 
      items: [ ...items, { code, title, details }],
      selectedItem: null,
    });
  }  

  onEditItem = code => {
    console.log("Editando Item " + code);
    this.setState({ selectedItem: this.state.items.find( item => item.code === code) });
  }

  onDelItem = code => {
    console.log("Eliminando Item " + code);
    const items = this.state.items.filter( item => item.code !== code);

    this.setState({ items, selectedItem: null });
  }

  onShowItem = code => {
    this.props.history.push(`/customers/${code}/details`);
    console.log("Ver más " + code);
  }
  
  // cdm
  componentDidMount() {
    const url = "https://randomuser.me/api/?results=3";

    fetch(url).then(data => data.json()).then(infoUsers => {
        const { results } = infoUsers;
        
        const items = transform(results);

        this.setState( { items });
        console.log("component Did Mount");
    });
  }
  
  render() {
   
    return (
      
        <div className="App">
          <AppBar position="static" >
            <Toolbar>Aplicacion de Estudio</Toolbar>
          </AppBar>


          <Switch>
            <Route path="/customers/:code/details" render={({ match }) => (
                <ShowUser />
              )} />

            <Route render={() => (
              <div>
                <AddNewEntry 
                  onAddItem={this.onAddItemClick}
                  onEditItem={this.onEditItemClick}
                  selectedItem={this.state.selectedItem}
                >
                </AddNewEntry>
                {
                  this.state.items ? (          
                  <MyCardList 
                    items={this.state.items}
                    onClickEdit={this.onEditItem}
                    onClickDel={this.onDelItem}
                    onClickShow={this.onShowItem}></MyCardList>) : 
                  (<CircularProgress size={50} />)

                } 
                <Route exact path="/customers/:code/image" render={({ match }) => (
                  <ShowImage 
                    code={match.params.code} 
                    user={this.state.items && this.state.items.find(user => user.code === match.params.code)} /> 
                )} />                               
              </div>
            )} />       
          </Switch>
          
        </div>

    );
  }
}

export default withRouter(App);
