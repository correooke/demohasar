import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
    addUser, 
    editUser,
    selectUser,
    removeUser,
    searchUser,
    loadUsers,  
} from '../actions';
import UserMain from '../component/UserMain';
import { usersSearchedSelector, selectedItemSelector, searchUserSelector } from '../selectors';

class UserMainContainer extends Component {

    onShowItem = code => {
        this.props.history.push(`/customers/${code}/details`);
        console.log("Ver más " + code);
    }

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
                    onShowItem={this.onShowItem}
                    selectedItem={this.props.selectedItem}
                    search={this.props.search}
                    items={this.props.itemsSearched}
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
    itemsSearched: PropTypes.array,
    selectedItem: PropTypes.object,
    search: PropTypes.string,
};

export default withRouter(connect(state => ({ 
    itemsSearched: usersSearchedSelector(state),
    selectedItem: selectedItemSelector(state), 
    search: searchUserSelector(state),
}), 
{
    addUser, 
    editUser, 
    selectUser,
    removeUser,
    searchUser,
    loadUsers,
})(UserMainContainer));
