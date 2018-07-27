import React from 'react';
import { entries } from 'lodash';
import { TextField } from '@material-ui/core';
/*
{
    source: '65.jpg',
    name: "Juan", 
    last: "Barrio",
    email: "r.com",
}

   [
       [ "source", "'65.jpg'" ],
       [ "name", "Juan" ], 
       [ "last", "Barrio" ], 
       [ "email", "r.com" ], 
   ]
*/

const EntryDetails = ({ details, onChange }) => {

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