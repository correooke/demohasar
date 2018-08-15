import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { MdPhone, 
    MdPhoneAndroid,
    MdContactMail,
    MdMyLocation } from 'react-icons/md';
import GoogleMapReact from 'google-map-react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'; 

const BackText = styled.span`
    color: #333;
    font-size: 12px;
    line-height: 30px;
`;
const DataText = styled.span`
    font-size: 20px;
    color: #333;
    font-style: normal;
    line-height: 50px;
    margin-left: 5px;
`;

const SGrid = styled(Grid)`
    margin-top: 25px;
    margin-bottom: 35px;
    background-color: #EEFA;
    border-radius: 5px;
    box-shadow: 7px 7px 30px 0px rgba(0,0,0,0.45);  
    padding-top: 35px;
    padding: 35px 30px 35px 30px; 
    color: blue;
`;

const ContactDataTitle = styled.h3`
    color: #FFF;
    border-bottom: solid 1px;
    border-color: #EEEC;
`;

const Sa = styled.a`
    text-decoration: none;
`;

const Pointer = ({ text }) => <div>{text}</div>;

class ShowUser extends Component {

    getAllExtra = (title, extra) => {
        const loc = { 
            lat: Number(extra.location.coordinates.latitude), 
            lng: Number(extra.location.coordinates.longitude) };

        return (
            <SGrid fluid>
                <Row end="xs">
                    <Col>
                        <Button onClick={this.props.onBack}><BackText>Volver al listado</BackText></Button> 
                    </Col>
                </Row>
                <Row style={{ background: "#EEE", borderRadius: 10 }} middle="xs">
                    <Col md={4}>
                        <img src={extra.picture.large} alt=""/>
                    </Col>                
                    <Col md={8}>
                        <h1>{title.toUpperCase()}</h1>
                    </Col>
                </Row>
                <Row style={{ paddingTop: 30 }} around="xs">
                    <Col xs>
                        <ContactDataTitle>Datos de contacto</ContactDataTitle>
                    </Col>
                </Row>
                <Row>
                    <Col md>
                        <Sa href={`tel:${extra.phone}`}>
                            <MdPhone size="2em" />
                            <DataText>{extra.phone}</DataText> 
                        </Sa>
                    </Col>
                    <Col md>
                        <Sa href={`tel:${extra.cell}`}>
                            <MdPhoneAndroid size="2em" />
                            <DataText>{extra.cell}</DataText>
                        </Sa>                    
                    </Col>
                    <Col md>
                        <Sa href={`mailto:${extra.email}`}>
                            <MdContactMail size="2em" />
                            <DataText>{extra.email}</DataText>
                        </Sa>    
                    </Col>
                </Row>
                <Row style={{ paddingTop: 30 }} around="xs">
                    <Col xs={12}>
                        <ContactDataTitle>Ubicación</ContactDataTitle>
                    </Col>
                </Row>                
                <Row middle="xs">
                    <Col md={4}>
                        <MdMyLocation size="2em" />
                        <DataText>
                            {`${extra.location.street}, ${extra.location.city}, ${extra.location.state}`}
                        </DataText>
                    </Col>
                    <Col md={8} style={{ height: '300px' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyBI1dQVt3SPutlJ1EklLEqf3PADnjPqx94" }}
                            defaultCenter={loc}
                            defaultZoom={11}
                            >
                            <Pointer
                                lat={loc.lat}
                                lng={loc.lng}
                                text={'Dirección'}
                            />
                        </GoogleMapReact>                    
                    </Col>                    
                </Row>
            </SGrid>
        );
    }

    

    render() {
        const { extra, title } = this.props.user;
        return (
            <div>
                {
                    extra && this.getAllExtra(title, extra)
                }

            </div>
        );
    }
}

ShowUser.propTypes = {
    user: PropTypes.object,
    onBack: PropTypes.func.isRequired,
};

export default ShowUser;