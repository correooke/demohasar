import React from 'react';
import PropTypes from 'prop-types';
import MyCardItem from './MyCardItem';

const ItemList = ({items}) => {
    return (
        <div className="main-list">
          {
            items.map(({ title, details }) => (
              <MyCardItem key={title} title={title} details={details}></MyCardItem>
            ))
          }
        </div>
    );
};

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
};

export default ItemList;