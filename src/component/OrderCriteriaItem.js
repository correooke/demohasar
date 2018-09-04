// @flow
import * as React from 'react';

type Props = {
    value: string, 
    children: React.Node,
}

const OrderCriteriaItem = ({value, children}: Props) => {
    return (
        <option value={value}>{children}</option>
    );
};

export default OrderCriteriaItem;