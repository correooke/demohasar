// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { injectIntl,
} from 'react-intl';
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
import { User } from '../types/User';

type Props = {
    addUser: (user: User) => void,
    editUser: (user: User) => void, 
    selectUser: (userCode: string) => void,
    removeUser: (userCode: string) => void,
    searchUser: (text: string) => void,
    loadUsers: () => void,
    selectedItem: string,
    itemsSearched: Array<User>,
    filter: React.Node,
    history: any,
    intl: any,
}
class UserMainContainer extends React.Component<Props> {

    onShowItem = code => {
        this.props.history.push(`/customers/${code}/details`);
        console.log("Ver más " + code);
    }

    componentDidMount() {
        this.props.loadUsers();
        const { messages } = this.props.intl;
        console.log(messages['APP.TITLE']);
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

export default injectIntl(withRouter(connect(state => ({ 
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
})(UserMainContainer)));
