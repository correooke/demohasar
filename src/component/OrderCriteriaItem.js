import React from 'react';

const OrderCriteriaItem = ({value, children}) => {
    return (
        <option value={value}>{children}</option>
    );
};

export default OrderCriteriaItem;