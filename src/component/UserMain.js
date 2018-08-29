import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import MyCardList from './MyCardList';
import ShowImage from './ShowImage';
import AddNewEntry from './../component/AddNewEntry';

class UserMain extends Component {

    render() {
        const { onShowItem, 
          onAddItemClick, 
          onEditItemClick, 
          selectedItem,
        } = this.props;

        return (
        <div>
            <AddNewEntry 
                onAddItem={onAddItemClick}
                onEditItem={onEditItemClick}
                selectedItem={selectedItem}
            >
            </AddNewEntry>          
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
  selectedItem: PropTypes.object,  
  onSelectItem: PropTypes.func.isRequired,
  onDelItem: PropTypes.func.isRequired,
  onShowItem: PropTypes.func.isRequired,
  items: PropTypes.array,
};

export default UserMain;