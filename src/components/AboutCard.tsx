import * as React from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

export interface AboutCardProps {
    header: string;
    logo: string;
    institution: string;
    designation: string;
    skills: {language: string; progress: string}[];
    location: string;
}

export interface AboutCardState {
    displayIcon: boolean;
}

export default class AboutCard extends React.Component<AboutCardProps, AboutCardState> {

    componentWillMount(): void {
        this.setState({displayIcon: this.props.skills.length === 3});
    }

    renderDetailsDiv = (): JSX.Element => {
        return(
            <div>
                <h4>{this.props.designation}</h4>
                <span>
                    <i className="fa fa-map-marker" style={{margin: 0}} /> 
                    <h4 className="location">{this.props.location}</h4>
                </span>
            </div>
        );
    }

    renderSkillDiv = (): JSX.Element => {
        
        const {skills} = this.props;

        return (
            <div>
                {
                    skills.map((skill, index) => {
                        return(
                            <div key={index}>
                                <span>
                                    <h5 style={{margin: '0'}}>
                                        <b>{skill.language}</b>
                                        <ProgressBar 
                                            now={Number(skill.progress)} 
                                            style={{margin: 0, marginTop: '2px', height: '10px', width: '80%'}}
                                            bsStyle="warning"
                                        />
                                    </h5>
                                </span>
                                <br/>
                            </div>
                        );
                    })
                }                
            </div>
        );
    }

    render(): JSX.Element {
        return(
            <div className="aboutcard">
                <Row style={{marginLeft: '10px'}}>
                    <Col sm={6} md={6} xs={6}>
                        <h2 className="page-header"><b>{this.props.header}</b></h2>
                    </Col>
                    <Col sm={6} md={6} xs={6} style={{textAlign: 'center'}}>
                        <i className={`fa fa-fw ${this.props.logo} fa-4x fa-icon`}/>
                    </Col>
                </Row>
                <Row>
                    <Col style={{marginLeft: '20px'}} sm={12} md={12} xs={12}>
                        <h3><b>{this.props.institution}</b></h3>
                    </Col>
                    <Col style={{marginLeft: '20px'}} sm={12} md={12} xs={12}>
                        {this.state.displayIcon ? this.renderSkillDiv() : this.renderDetailsDiv()}
                    </Col>
                     
                </Row>
            </div>
        );
    }
}