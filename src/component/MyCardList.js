import React from 'react';
import PropTypes from 'prop-types';
import MyCardItem from './MyCardItem';

const MyCardList = ({ items }) => {
    
    return (
        <div className="main-list">
          {
            items.map(({ code, title, details }) => (
              <MyCardItem key={code} title={title} details={details}></MyCardItem>
            ))
          }
        </div>
    );
};

MyCardList.propTypes = {
    items: PropTypes.array.isRequired,
};

export default MyCardList;