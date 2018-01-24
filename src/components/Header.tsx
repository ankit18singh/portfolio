import * as React from 'react';
import { Row, Col, Grid, Button } from 'react-bootstrap';

const header = {
    backgroundColor: 'yellow',
    margin: 0,
    height: '100vh',
    width: '100%',
};

const buttonStyle = {
    borderRadius : '20px',
    display: 'none'
};

export default class Header extends React.Component {
    render() {
        return(
            <div style={header} className="headerPage">
                <Grid>
                    <Row>
                        <Col md={6}>
                            <div className="intro">
                                <h1>Hello, I am<br/>
                                <b>ANKIT KUMAR SINGH</b></h1>
                                <h3>Web Developer  |  UI/UX Designer</h3>
                                <Button bsSize="large" style={buttonStyle}> 
                                    Download Resume
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
