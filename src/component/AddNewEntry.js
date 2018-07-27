// rccp

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import EntryDetails from './EntryDetails';

class AddNewEntry extends Component {

    state = {
        title: '', 
        details: {
            source: '',
            name: '',
            last: '',
            email: '',
        }, 
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.data)
            this.setState(nextProps.data);    
    }

    onChangeDetail = (changedDetail) => {
        this.setState({ details: { ...this.state.details, ...changedDetail }})
    }

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
                <EntryDetails details={this.state.details} onChange={this.onChangeDetail} ></EntryDetails>
                <Button onClick={() => onAddItem(this.state) }>Agregar</Button>
            </div>
        );
    }
}

AddNewEntry.propTypes = {
    onAddItem: PropTypes.func.isRequired,
};


export default AddNewEntry;