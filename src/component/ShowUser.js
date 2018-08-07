import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { MdPhone, 
    MdPhoneAndroid,
    MdContactMail,
    MdMyLocation } from 'react-icons/md';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components'; 
import transform from '../services/transform';
import { URL_BASE } from './../constants/api';

const BackText = styled.span`
    color: #333;
    font-size: 12px;
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
    
    state = {};

    componentDidMount() {
        if (!this.props.user) {
            const url = `${URL_BASE}?login.uuid=${this.props.match.params.code}`;

            fetch(url).then(data => data.json()).then(
                results => {
                    const items = transform(results);
                    if (items) {
                        this.setState(items[0]);
                    }
                }
            );
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.user && (nextProps.user.code !== prevState.code))
            return nextProps.user;
        
        return null;
    }

    /*
      "results": [
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "rolf",
        "last": "hegdal"
      },
      "location": {
        "street": "ljan terrasse 346",
        "city": "vear",
        "state": "rogaland",
        "postcode": "3095",
        "coordinates": {
          "latitude": "54.8646",
          "longitude": "-97.3136"
        },
        "timezone": {
          "offset": "-10:00",
          "description": "Hawaii"
        }
      },
      "email": "rolf.hegdal@example.com",
      "login": {
        "uuid": "c4168eac-84b8-46ea-b735-c9da9bfb97fd",
        "username": "bluefrog786",
        "password": "ingrid",
        "salt": "GtRFz4NE",
        "md5": "5c581c5748fc8c35bd7f16eac9efbb55",
        "sha1": "c3feb8887abed9ec1561b9aa2c9f58de21d1d3d9",
        "sha256": "684c478a98b43f1ef1703b35b8bbf61b27dbc93d52acd515e141e97e04447712"
      },
      "dob": {
        "date": "1975-11-12T06:34:44Z",
        "age": 42
      },
      "registered": {
        "date": "2015-11-04T22:09:36Z",
        "age": 2
      },
      "phone": "66976498",
      "cell": "40652479",
      "id": {
        "name": "FN",
        "value": "12117533881"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/65.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/65.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/65.jpg"
      },
      "nat": "NO"
      */

    getAllExtra = (title, extra) => {
        const loc = { 
            lat: Number(extra.location.coordinates.latitude), 
            lng: Number(extra.location.coordinates.longitude) };

        return (
            <SGrid>
                <Row end="xs">
                    <Col>
                        <Link to="/"><BackText>Volver al listado</BackText></Link> 
                    </Col>
                </Row>
                <Row style={{ background: "#EEE", borderRadius: 10 }} middle="xs">
                    <Col md={8}>
                        <h1>{title.toUpperCase()}</h1>
                    </Col>
                    <Col md={4}>
                        <img src={extra.picture.large} alt=""/>
                    </Col>
                </Row>
                <Row style={{ paddingTop: 30 }} around="xs">
                    <Col xs={12}>
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
        return (
            <div>
                {
                    this.state.extra && this.getAllExtra(this.state.title, this.state.extra)
                }

            </div>
        );
    }
}

ShowUser.propTypes = {
    user: PropTypes.object,
};

export default withRouter(ShowUser);