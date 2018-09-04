// @flow
import * as React from 'react';
import { Card, CardActions, CardHeader } from '@material-ui/core';
import { Button } from '@material-ui/core';
import PersonalAvatar from './PersonalAvatar';
import { User, UserActions } from './../types/User';

// Componente funcional

type Props = {
    user: User,
    actions: UserActions, 
};

const MyCardItem = ({ 
    user: {code, title, details}, 
    actions: { onClickEdit, onClickDel, onClickShow }
}: Props) => {
    const { source, name, last, email } = details;
    return (
        <Card raised={true} elevation={5}>
            <div className="myCardItem">
                <div className="myCardItemBlock">
                    <PersonalAvatar code={code} source={source} ></PersonalAvatar>
                </div>
                <div className="myCardItemBlock">
                    <CardHeader title={title}></CardHeader>
                    {`${name} - ${last}`}
                    <p>{email}</p>
                </div>
                <div className="myCardItemBlock">
                    <CardActions style={{ display: 'inline-grid' }}>
                        <Button onClick={() => onClickEdit(code)} style={{ margin: 'auto'}}>Editar</Button>
                        <Button onClick={() => onClickDel(code)} style={{ margin: 'auto'}}>Eliminar</Button>
                        <Button onClick={() => onClickShow(code)} style={{ margin: 'auto'}}>Ver más</Button>
                    </CardActions>
                </div>
            </div>
        </Card>);
};

export default MyCardItem;


