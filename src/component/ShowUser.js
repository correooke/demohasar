import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class ShowUser extends Component {
    render() {
        return (
            <div>
               <h1>Usuario {this.props.match.params.code}</h1> 
            </div>
        );
    }
}

ShowUser.propTypes = {
    code: PropTypes.string.isRequired,
};

export default withRouter(ShowUser);