import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';

class AddNewItem extends Component {

    state = {
        title: '',
        details: '',
    };

    constructor(props) {
        super(props);
        this.txtTitulo = React.createRef();
    }

    componentDidMount() {
        if (this.txtTitulo) {
            //this.txtTitulo.focus();
        }
    }
    
    render() {
        return (
            <div>
                <TextField 
                    autoFocus={true}
                    label='Titulo'
                    onChange={(event) => this.setState({
                        title: event.target.value
                })}
                    value={this.state.title} 
                >
                </TextField>    
                <TextField
                    label='Detalles'
                    onChange={(event) => this.setState({
                        details: event.target.value
                    })}
                    value={this.state.details}
                    >
                </TextField>           
                <Button onClick={() => this.props.onAddItem(this.state)}>
                    Agregar Item
                </Button> 
            </div>
        );
    }
}

AddNewItem.propTypes = {
    onAddItem: PropTypes.func.isRequired,
};

export default AddNewItem;