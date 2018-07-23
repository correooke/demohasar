import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader } from '@material-ui/core';
import { Button } from '@material-ui/core';

// Componente funcional

const MyCardItem = ({ title, details }) => (
    <Card raised={true} elevation={5}>
        <CardHeader title={title}></CardHeader>
        {details}
        <CardActions>
            <Button style={{ margin: 'auto' }}>Aceptar</Button>
        </CardActions>
    </Card>
);

MyCardItem.propTypes = {
    title: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired
};

export default MyCardItem;


