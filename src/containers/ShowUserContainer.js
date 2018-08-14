import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowUser from '../component/ShowUser';
import { loadUser } from './../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ShowUserContainer extends Component {

    componentDidMount() {
        this.props.loadUser(this.props.match.params.code);
    }
    
    render() {
        return (
            this.props.user  ? 
                <ShowUser user={this.props.user}></ShowUser> :
                <div>Loading</div>
        );
    }
}

ShowUserContainer.propTypes = {
    user: PropTypes.object,
    loadUser: PropTypes.func.isRequired,
};

export default withRouter(connect(state => ({ user: state.users.currentUser }),
{ loadUser })(ShowUserContainer));