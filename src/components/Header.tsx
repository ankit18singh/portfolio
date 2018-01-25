import * as React from 'react';
import { Row, Col, Grid, Button } from 'react-bootstrap';
import Sea from './Sea';
import Typist from 'react-typist';

const header = {
    background: 'linear-gradient(to bottom, #374e60, #374e61)',
    margin: 0,
    height: '100vh',
    width: '100%',
};

const buttonStyle = {
    borderRadius : '20px',
    display: 'none'
};

const mountain = require('../assets/sky-mountains.png');

export default class Header extends React.Component {
    render() {
        return(
            <div style={header} className="headerPage">
                <Grid>
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <div className="intro">
                                <Typist cursor={{show: false}}>
                                    <span><h1>Hello, &nbsp;
                                    <Typist.Delay ms={1000} /> 
                                    I am<br/>
                                    <b>ANKIT KUMAR SINGH</b></h1>
                                    <Typist.Delay ms={1000} />
                                    <h3>    
                                        Web Developer
                                        <Typist.Backspace count={13} delay={1000}/>
                                        UI/UX Designer
                                        <Typist.Backspace count={14} delay={1000}/>
                                        Build apps using Grails & React <Typist.Delay ms={1000}/> &hearts;
                                    </h3></span>
                                </Typist>
                                <Button bsSize="large" style={buttonStyle}> 
                                    Download Resume
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <img src={mountain} className="img img-responsive mountain"/>
                <Sea />
            </div>
        );
    }
}
