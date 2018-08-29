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
import { usersSearchedSelector, 
    selectedItemSelector, 
 } from '../selectors';

class UserMainContainer extends Component {

    onShowItem = code => {
        this.props.history.push(`/customers/${code}/details`);
        console.log("Ver más " + code);
    }

    componentDidMount() {
        this.props.loadUsers();
    }
    
    render() {
        const { filter } = this.props;
        return (
            <React.Fragment>
                
                {filter}

                <UserMain 
                    onAddItemClick={this.props.addUser}
                    onEditItemClick={this.props.editUser}
                    onSelectItem={this.props.selectUser}
                    onDelItem={this.props.removeUser}
                    onShowItem={this.onShowItem}
                    selectedItem={this.props.selectedItem}
                    items={this.props.itemsSearched}
                ></UserMain> 
            </React.Fragment>
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
    filter: PropTypes.element.isRequired,
};

export default withRouter(connect(state => ({ 
    itemsSearched: usersSearchedSelector(state),
    selectedItem: selectedItemSelector(state), 
}), 
{
    addUser, 
    editUser, 
    selectUser,
    removeUser,
    searchUser,
    loadUsers,
})(UserMainContainer));
