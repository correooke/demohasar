import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchAction, cleanAction } from '../actions';
import { searchTextSelector } from '../selectors';

class UserMainContainer extends Component {

    onChange = event => {
        this.props.doSearch(event.target.value);
    }

    render() {
        return (
            <div>
                <h1>Demo básica Redux</h1>
                <input 
                    type="text" 
                    onChange={this.onChange} 
                    value={this.props.searchText}
                />
                <br />
                <input type="checkbox" checked={this.props.cleaned} />
                <button onClick={() => { this.props.doClean() }}>Limpiar</button>
            </div>
        );
    }
}

UserMainContainer.propTypes = {
    searchText: PropTypes.string.isRequired,
    doSearch: PropTypes.func,
};

const mapStateToProps = state => ( { 
    searchText: searchTextSelector(state),
    cleaned: state.search.cleaned, 
} );

const mapDispatchToProps = dispatch => ({ 
    doSearch: text => dispatch(searchAction(text)),
    doClean: () => dispatch(cleanAction()),
});

const HOC = connect(mapStateToProps, mapDispatchToProps);

export default HOC(UserMainContainer);
