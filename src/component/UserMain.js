// @flow
import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';
import { Route } from 'react-router-dom';
import MyCardList from './MyCardList';
import ShowImage from './ShowImage';
import AddNewEntry from './../component/AddNewEntry';
import { User } from '../types/User';

type Props = {
  onAddItemClick: (item: mixed) => void,
  onEditItemClick: (item: mixed) => void,
  selectedItem: string,  
  onSelectItem: (item: string) => void,
  onDelItem: (item: string) => void,
  onShowItem: (item: string) => void,
  items: Array<User>, 
}
class UserMain extends Component<Props> {

    render() {
        const { onShowItem, 
          onAddItemClick, 
          onEditItemClick, 
          selectedItem,
        } = this.props;

        const actions = {
          onClickEdit: this.props.onSelectItem,
          onClickDel: this.props.onDelItem,
          onClickShow: onShowItem,
        };

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
                actions={actions}
              ></MyCardList>) : 
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



export default UserMain;