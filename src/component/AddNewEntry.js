// rccp

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

class AddNewEntry extends Component {

    state = {
        title: '', 
        details: '',
    };

    render() {
        const { onAddItem } = this.props;

        return (
            <div className='newEntryStyle'>
                <TextField 
                    autoFocus={true}
                    label='Titulo' 
                    value={this.state.title}
                    onChange={event => this.setState( { title: event.target.value } ) }
                ></TextField>    
                <TextField 
                    label='Detalle' 
                    value={this.state.details}
                    onChange={event => this.setState( { details: event.target.value } ) }
                ></TextField>  
                <Button onClick={() => onAddItem(this.state) }>Agregar</Button>
            </div>
        );
    }
}

AddNewEntry.propTypes = {
    onAddItem: PropTypes.func.isRequired,
};


export default AddNewEntry;