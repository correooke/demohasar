import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import transform from '../services/transform';
import { URL_BASE } from './../constants/api';

class ShowUser extends Component {
    
    state = {};

    componentDidMount() {
        if (!this.props.user) {
            const url = `${URL_BASE}?login.uuid=${this.props.match.params.code}`;

            fetch(url).then(data => data.json()).then(
                results => {
                    const items = transform(results);
                    if (items) {
                        this.setState(items[0]);
                    }
                }
            );
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.user && (nextProps.user.code !== prevState.code))
            return nextProps.user;
        
        return null;
    }
    


    
    getAllExtra = ({ extra }) => {

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
    user: PropTypes.object,
};

export default withRouter(ShowUser);