import React from 'react';
import PropTypes from 'prop-types';

// Componente funcional

const Card = ({ title, details }) => <h1>{`${title} - ${details}!!!`}</h1>;

Card.propTypes = {
    title: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired
};

export default Card;


