import * as React from 'react';
import AboutCard from './AboutCard';
import { Grid, Row, Col } from 'react-bootstrap';

import { about } from '../data/about';

const aboutStyle = {
    height: '100vh',
};

export interface AboutData {
    heading: string;
    icon: string;
    institution: string;
    designation: string;
    skills: {language: string; progress: string}[];
    location: string;
}

export default class About extends React.Component {

    render(): JSX.Element {
        return(
            <div style={aboutStyle} className="container">
                <div className="header">
                    <h1 className="container">
                        <b className="aboutmeheader"> About Me </b>
                    </h1>
                    <div className="underline"/>
                </div>
                <Grid>
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