import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import transform from '../services/transform';
import { URL_BASE } from './../constants/api';

class ShowUser extends Component {
    
    state = null;

    componentDidMount() {
        
        const url = `${URL_BASE}?login.uuid=${this.props.match.params.code}`;

        fetch(url).then(data => data.json()).then(
            ({ results }) => {
                const items = transform(results);
                if (items) {
                    this.setState(items[0]);
                }
            }
        );
    }
    
    render() {
        return (
            <div>
               <h1>Usuario {this.state && this.state.title}</h1> 
               <span>{this.props.match.params.code}</span>
            </div>
        );
    }
}

ShowUser.propTypes = {
    code: PropTypes.string.isRequired,
};

export default withRouter(ShowUser);