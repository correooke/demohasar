import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { entries } from 'lodash';

const EntryDetails = ({ details, onChange }) => {
    return (
        
        <div>
            {
                entries(details).map(item => (
                <TextField 
                    key={item[0]}
                    label={item[0]} 
                    value={item[1]}
                    onChange={event => onChange({ [item[0]]: event.target.value}) }
                ></TextField> ))
            }
        </div>
    );
};

EntryDetails.propTypes = {
    details: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default EntryDetails;