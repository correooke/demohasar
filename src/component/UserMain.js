import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';
import { Route, withRouter } from 'react-router-dom';
import MyCardList from './MyCardList';
import AddNewEntry from './AddNewEntry';
import ShowImage from './ShowImage';
import uuid from 'uuid/v1';
import transform from './../services/transform';
import { URL_BASE } from './../constants/api';

const items = null;

class UserMain extends Component {

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
      const url = URL_BASE;

      fetch(url).then(data => data.json()).then(results => {
          const items = results ? transform(results) : null;

          this.setState( { items });
          console.log("component Did Mount");
      });
    }

    render() {
        return (
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
        );
    }
}

export default withRouter(UserMain);