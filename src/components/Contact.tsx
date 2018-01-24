import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Contact extends React.Component {
    render() {
        return(
            <div className="contact">
                <Row>
                    <Col sm={6} md={6} xs={12} style={{backgroundColor: 'yellow'}}>
                        <h1 className="container">
                            <b className="aboutmeheader">Reach Me</b>
                        </h1>
                    </Col>
                    <Col sm={6} md={6} xs={12} style={{backgroundColor: 'black'}}>
                        <h1 className="container">
                            <b className="aboutmeheader">Contact</b>
                        </h1>
                    </Col>
                </Row>
            </div>
        );
    }
}