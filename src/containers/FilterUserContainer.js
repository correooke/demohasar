import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import OrderCriteria from './../component/OrderCriteria';
import { searchUserSelector,
    sortCriteriaSelector } from './../selectors/index';
import { searchUser, 
    selectSortCriteria 
} from './../actions';
import { sortCriterias } from './../constants/sortCriterias';

const SearchText = styled(TextField)`
  width: 50vw;
  background: white;
`;

class FilterUserContainer extends Component {
    
    onSelectCriteria = item => {
        this.props.selectSortCriteria(item);
    }

    render() {
        const { 
            search, 
            searchUser,
            sortCriteria,
        } = this.props;
        return (
            <div>
                <OrderCriteria 
                    sortCriteria={sortCriteria}
                    items={sortCriterias}
                    onSelectCriteria={this.onSelectCriteria}></OrderCriteria>
                <SearchText
                        autoFocus={true}
                        label='Búsqueda'
                        value={search ? search : ''}
                        onChange={event => searchUser(event.target.value)}>
                </SearchText> 
              
            </div>
        );
    }
}

FilterUserContainer.propTypes = {
    search: PropTypes.string,    
    searchUser: PropTypes.func.isRequired,    
    sortCriteria: PropTypes.string,
};

export default connect(state => ({ 
    search: searchUserSelector(state),
    sortCriteria: sortCriteriaSelector(state),
}),
{ 
    searchUser,
    selectSortCriteria,
})(FilterUserContainer);