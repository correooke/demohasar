// @flow
import React from 'react';
import OrderCriteriaItem from './OrderCriteriaItem';

type IdValue = {
    id: string,
    value: string, 
};

type Props = {
    items: Array<IdValue>, 
    onSelectCriteria: (value: string) => void, 
    sortCriteria: string,
};

const OrderCriteria = ({ items, onSelectCriteria, sortCriteria }: Props) => {

    return (
        <select value={sortCriteria} onChange={({target}) => onSelectCriteria(target.value)} name="" id="">
            { 
                items.map(i => (
                    <OrderCriteriaItem value={i.id} key={i.id}>
                        {i.value}
                    </OrderCriteriaItem>))
            }
        </select> 
    );
};

export default OrderCriteria;