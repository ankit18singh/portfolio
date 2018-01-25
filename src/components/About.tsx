import * as React from 'react';
import AboutCard from './AboutCard';
import { Grid, Row, Col } from 'react-bootstrap';

import { about } from '../data/about';

export interface AboutData {
    heading: string;
    icon: string;
    institution: string;
    designation: string;
    skills: {language: string; progress: string}[];
    location: string;
}

export default class About extends React.Component {

    changeColor = () => {
        if (window.location.pathname === '/about') {
            document.body.style.backgroundColor = '#1b232e';
        }
    }

    render(): JSX.Element {
        this.changeColor();

        return(
            <div className="aboutStyle">
                <div className="container header">
                    <h1 style={{marginTop: 0}}>
                        <b className="aboutmeheader"> About Me </b>
                    </h1>
                    <div className="underline"/>
                </div>
                <Grid style={{marginBottom: '50px'}}>
                    <Row>
                        { about.map((data, index) => {
                                return (
                                    <Col xs={12} md={4} key={index}>
                                        <AboutCard 
                                            header={data.heading} 
                                            logo={data.icon}
                                            institution={data.institution}
                                            designation={data.designation}
                                            skills={data.skills}
                                            location={data.location}
                                        />
                                    </Col>
                                );
                            })}
                    </Row>
                </Grid>
            </div>
        );
    }
}