import React, { Component } from 'react';
import './App.css';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import ShowUserContainer from './containers/ShowUserContainer';
import UserMainContainer from './containers/UserMainContainer';
import FilterUserContainer from './containers/FilterUserContainer';

class App extends Component {
  
  render() {
    return (
        <div className="App">
          <AppBar position="static" >
            <Toolbar>
              <h1><FormattedMessage id="APP.TITLE" /></h1>
            </Toolbar>
          </AppBar>
          <FormattedMessage
            id={'GENERIC.WELCOME'}
            values={{ name: 'Marcelo', unreadCount: 2 }}>

          </FormattedMessage>
          <span className="active-indicator">
            <FormattedRelative value={Date.now()}/>
          </span>
          <Button onClick={() => {
            import("./services/dynamic").then(dynamic => {
              console.log(dynamic.default.porDos(1));
            }); 
          }}>
            
            - Carga Dinámica
          </Button>
          <Switch>
            <Route path="/customers/:code/details" render={({ match }) => (
              <ShowUserContainer />
            )} />
            <Route render={() => (
              <UserMainContainer filter={<FilterUserContainer />} />
            )} />       
          </Switch>
        </div>
    );
  }
}

// user={this.state.items && this.state.items.find(user => user.code === match.params.code)} 

export default App;
