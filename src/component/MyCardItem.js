import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader } from '@material-ui/core';
import { Button } from '@material-ui/core';
import PersonalAvatar from './PersonalAvatar';

// Componente funcional

const MyCardItem = ({ code, title, details, onClickEdit, onClickDel, onClickShow }) => {
    const { source, name, last, email } = details;
    return (<Card raised={true} elevation={5}>
        <div className="myCardItem">
            <div className="myCardItemBlock">
                <PersonalAvatar source={source} ></PersonalAvatar>
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

MyCardItem.propTypes = {
    title: PropTypes.string.isRequired,
    details: PropTypes.object.isRequired,
    onClickEdit: PropTypes.func.isRequired,
    onClickDel: PropTypes.func.isRequired,
    onClickShow: PropTypes.func.isRequired,
};

export default MyCardItem;


