import React, { Component } from 'react';
import { CircularProgress, TextField } from '@material-ui/core';
import { Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import MyCardList from './MyCardList';
import AddNewEntry from './AddNewEntry';
import ShowImage from './ShowImage';
import uuid from 'uuid/v1';
import transform from './../services/transform';
import { URL_BASE } from './../constants/api';

const items = null;

const SearchText = styled(TextField)`
  width: 50vw;
  background: white;
`;

const applySearch = (items, search) => 
  items.filter(item => item.title.toUpperCase().includes(search.toUpperCase()));

class UserMain extends Component {

    state = {
      items,
      itemsSearched: items,
      selectedItem: null, 
      search: '',       
    };

    constructor(props) {
      super(props);

      // escuchar los cambios en el store
      this.props.store.subscribe(() => {

        console.log(this.props.store.getState());
        this.onSearchComplete(this.props.store.getState().search);
      });
    }

    onSearch = text => {
      const action = {
        type: "SEARCH",
        payload: text
      };

      // ejecutamos una acción contra el store
      this.props.store.dispatch(action);
    }

    onSearchComplete = search => {
      this.setState(
        {
          search,
          itemsSearched: applySearch(this.state.items, search)
        }
      );
    }

    onAddItemClick = ({ title, details }) => {
      console.log(`Titulo: ${title} Detalle: ${details}`);
      const code = uuid();
      const items = [ ...this.state.items, { code, title, details }];
      this.setState({ 
        items,
        itemsSearched: items,
        search: '', 
      });
    }

    onEditItemClick = ({ code, title, details }) => {
      console.log(`Finalizó la edición Titulo: ${title} Detalle: ${details}`);

      //this.setState({ items: [ ...this.state.items, { code, title, details }] })
      const itemsDel = this.state.items.filter( item => item.code !== code);
      const items = [ ...itemsDel, { code, title, details }];
      this.setState({ 
        items,
        itemsSearched: items,
        selectedItem: null,
        search: '', 
      });
    }  

    onEditItem = code => {
      console.log("Editando Item " + code);
      this.setState({ selectedItem: this.state.items.find( item => item.code === code) });
    }

    onDelItem = code => {
      console.log("Eliminando Item " + code);
      const items = this.state.items.filter( item => item.code !== code);

      this.setState({ 
        items, 
        itemsSearched: applySearch(items, this.state.search), 
        selectedItem: null 
      });
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

          this.setState( { items, itemsSearched: items });
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
            <SearchText
                    autoFocus={true}
                    label='Búsqueda'
                    value={this.state.search}
                    onChange={event => this.onSearch(event.target.value)}>
            </SearchText>

            {
              this.state.itemsSearched ? (          
              <MyCardList 
                items={this.state.itemsSearched}
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