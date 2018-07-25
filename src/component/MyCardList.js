import React from 'react';
import PropTypes from 'prop-types';
import MyCardItem from './MyCardItem';

const MyCardList = ({ items, onClickEdit, onClickDel, onClickShow }) => {
    
    return (
        <div className="main-list">
          {
            items.map(({ code, title, details }) => (
              <MyCardItem 
                key={code} 
                code={code} 
                title={title} 
                details={details}
                onClickEdit={onClickEdit}
                onClickDel={onClickDel}
                onClickShow={onClickShow}></MyCardItem>
            ))
          }
        </div>
    );
};

MyCardList.propTypes = {
    items: PropTypes.array.isRequired,
    onClickEdit: PropTypes.func.isRequired,
    onClickDel: PropTypes.func.isRequired,
    onClickShow: PropTypes.func.isRequired,    
};

export default MyCardList;