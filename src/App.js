import React, { Component } from 'react';
import './App.css';
import { AppBar, Toolbar } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import ShowUserContainer from './containers/ShowUserContainer';
import UserMainContainer from './containers/UserMainContainer';

class App extends Component {
  
  render() {
    return (
        <div className="App">
          <AppBar position="static" >
            <Toolbar>Aplicacion de Estudio</Toolbar>
          </AppBar>

          <Switch>
            <Route path="/customers/:code/details" render={({ match }) => (
              <ShowUserContainer />
            )} />
            <Route render={() => (
              <UserMainContainer />
            )} />       
          </Switch>
        </div>
    );
  }
}

// user={this.state.items && this.state.items.find(user => user.code === match.params.code)} 

export default App;
