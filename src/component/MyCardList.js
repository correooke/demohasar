// @flow
import React from 'react';
import MyCardItem from './MyCardItem';
import { User, UserActions } from './../types/User';

type Props = {
    items: Array<User>,
    actions: UserActions,   
};

const MyCardList = ({ items, actions }: Props) => {
    
    return (
        <div className="main-list">
          {
            items.map(user => (
                <MyCardItem 
                    key={user.code} 
                    user={user}
                    actions={actions}>
                </MyCardItem>
            ))
          }
        </div>
    );
};

export default MyCardList;