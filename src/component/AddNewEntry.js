// rccp

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import EntryDetails from './EntryDetails';

const initialState = {
    title: '',
    details: {
        source: '',
        name: '',
        last: '',
        email: ''
    },
    editing: false
};

class AddNewEntry extends Component {

    state = initialState;

    onChangeItem = itemValue => {
        debugger;
        this.setState({
            details: {
                ...this.state.details,
                ...itemValue
            }
        });
        console.log(`onChangeItem: ${JSON.stringify(itemValue)}`);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        //console.log(JSON.stringify(nextProps.selectedItem));
        if (nextProps.selectedItem && nextProps.selectedItem.code !== prevState.code) {
            return {
                ...nextProps.selectedItem,
                editing: true
            };
        } else {
            if (nextProps.selectedItem === null && prevState.editing)
                return initialState;
            else
                return prevState;
        }        
    }
    

    render() {
        const {onAddItem, onEditItem} = this.props;

        return (
            <div className='newEntryStyle'>
                {this.state.editing
                    ? <div>Editando</div>
                    : <div>Creando nuevo</div>
}
                <TextField
                    autoFocus={true}
                    label={<FormattedMessage id='GENERIC.TITLE' />}
                    value={this.state.title}
                    onChange={event => this.setState({title: event.target.value})}></TextField>
                <EntryDetails details={this.state.details} onChange={this.onChangeItem}></EntryDetails>
                <Button
                    onClick={() => {
                    this.state.editing
                        ? onEditItem(this.state)
                        : onAddItem(this.state)
                }}>
                    {this.state.editing
                        ? <FormattedMessage id="GENERIC.EDIT" />
                        : <FormattedMessage id="GENERIC.ADD" />}
                </Button>
            </div>
        );
    }
}

AddNewEntry.propTypes = {
    onAddItem: PropTypes.func.isRequired,
    onEditItem: PropTypes.func.isRequired,
    selectedItem: PropTypes.object
};

export default AddNewEntry;