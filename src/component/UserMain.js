import React, { Component } from 'react';
import { CircularProgress, TextField } from '@material-ui/core';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MyCardList from './MyCardList';
import AddNewEntry from './AddNewEntry';
import ShowImage from './ShowImage';

const SearchText = styled(TextField)`
  width: 50vw;
  background: white;
`;

class UserMain extends Component {

    render() {
      const { onShowItem } = this.props;

        return (
        <div>
            <AddNewEntry 
              onAddItem={this.props.onAddItemClick}
              onEditItem={this.props.onEditItemClick}
              selectedItem={this.props.selectedItem}
            >
            </AddNewEntry>
            <SearchText
                    autoFocus={true}
                    label='Búsqueda'
                    value={this.props.search ? this.props.search : ''}
                    onChange={event => this.props.onSearch(event.target.value)}>
            </SearchText>

            {
              this.props.items ? (          
              <MyCardList 
                items={this.props.items}
                onClickEdit={this.props.onSelectItem}
                onClickDel={this.props.onDelItem}
                onClickShow={onShowItem}></MyCardList>) : 
              (<CircularProgress size={50} />)

            } 
            <Route path="/customers/:code/image" render={({ match }) => (
              <ShowImage 
                code={match.params.code} 
                user={this.props.items && this.props.items.find(item => item.code === match.params.code)} /> 
            )} />                               
          </div>
        );
    }
}

UserMain.propTypes = {
  onAddItemClick: PropTypes.func.isRequired,
  onEditItemClick: PropTypes.func.isRequired,
  onSelectItem: PropTypes.func.isRequired,
  onDelItem: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onShowItem: PropTypes.func.isRequired,
  selectedItem: PropTypes.object,
  search: PropTypes.string,
  items: PropTypes.array,
};

export default UserMain;