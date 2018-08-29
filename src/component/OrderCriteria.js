import React from 'react';
import PropTypes from 'prop-types';
import OrderCriteriaItem from './OrderCriteriaItem';

const OrderCriteria = ({ items, onSelectCriteria, sortCriteria }) => {
    return (
        <select value={sortCriteria} onChange={({target}) => onSelectCriteria(target.value)} name="" id="">
            { 
                items.map(i => (
                    <OrderCriteriaItem value={i.id} key={i.id}>{i.value}</OrderCriteriaItem>))
            }
        </select> 
    );
};

OrderCriteria.propTypes = {
    items: PropTypes.array.isRequired,
    onSelectCriteria: PropTypes.func.isRequired,
    sortCriteria: PropTypes.string,
};

export default OrderCriteria;