// @flow
import React from 'react';
import { entries } from 'lodash';
import { TextField } from '@material-ui/core';

type Props = {
    details: string,
    onChange: (value: string) => void,
}

const EntryDetails = ({ details, onChange }: Props) => {
    const mapDetail = item => ( /* item = [ "source", "'65.jpg'" ] */ 
        <TextField 
            key={item[0]}
            label={item[0]} 
            value={item[1]}
            onChange={event => onChange( { [item[0]]: event.target.value } ) }
        ></TextField>  
    );   //  { "source": event.target.value }
    const allTheItems = entries(details);
    return (
        <div>
            {
                allTheItems.map(mapDetail)
            }
        </div>
    );
};

export default EntryDetails;