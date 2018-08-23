import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowUser from '../component/ShowUser';
import { loadUser, cleanUser } from './../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { currentUserSelector } from '../selectors';

class ShowUserContainer extends Component {

    componentDidMount() {
        this.props.loadUser(this.props.match.params.code);
    }
    
    onBack = () => {
        this.props.history.push("/");
    }

    componentWillUnmount() {
        this.props.cleanUser();
    }

    render() {
        return (
            this.props.user  ? 
                <ShowUser user={this.props.user} onBack={this.onBack} ></ShowUser> :
                <div>Loading</div>
        );
    }
}

ShowUserContainer.propTypes = {
    user: PropTypes.object,
    loadUser: PropTypes.func.isRequired,
    cleanUser: PropTypes.func.isRequired,
};

export default withRouter(connect(state => ({ user: currentUserSelector(state) }),
{ loadUser, cleanUser })(ShowUserContainer));