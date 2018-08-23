import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
    addUser, 
    editUser,
    selectUser,
    removeUser,
    searchUser,
    loadUsers,  
} from '../actions';
import UserMain from '../component/UserMain';

class UserMainContainer extends Component {

    componentDidMount() {
        this.props.loadUsers();
    }
    
    render() {
        return (
            <div>
                <UserMain 
                    onAddItemClick={this.props.addUser}
                    onEditItemClick={this.props.editUser}
                    onSelectItem={this.props.selectUser}
                    onDelItem={this.props.removeUser}
                    onSearch={this.props.searchUser}
                    selectedItem={this.props.selectedItem}
                    search={this.props.search}
                    itemsSearched={this.props.itemsSearched}
                    items={this.props.items}
                ></UserMain>
            </div>
        );
    }
}

UserMainContainer.propTypes = {
    addUser: PropTypes.func.isRequired,
    editUser: PropTypes.func.isRequired,
    selectUser: PropTypes.func.isRequired,
    removeUser: PropTypes.func.isRequired,
    searchUser: PropTypes.func.isRequired,
    loadUsers: PropTypes.func.isRequired,
    items: PropTypes.object,
    itemsSearched: PropTypes.array,
    selectedItem: PropTypes.object,
    search: PropTypes.string,
};

export default connect(({ users: { items, itemsSearched, selectedItem, search } }) => ({ 
    items,
    itemsSearched,
    selectedItem, 
    search,
}), 
{
    addUser, 
    editUser, 
    selectUser,
    removeUser,
    searchUser,
    loadUsers,
})(UserMainContainer);
