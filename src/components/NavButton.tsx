import * as React from 'react';
import { scroll } from '../utils/scroll';
import { Link } from 'react-router-dom';

/* tslint:disable no-any */
export interface NavButtonState {
    transform: any;
    showToolTip: boolean;
}

export default class NavButton extends React.Component {
    
    /* tslint:disable typedef */
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
      }
      
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
      
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
      
      handleScroll(event) {
        scroll();
      }

    render() {
        return(
            <div className="navbutton"> 
                <ul className="nav-ul">
                    <Link to="/">
                        <li className="nav-li navlinkButton" />
                    </Link>
                    <Link to="/about">
                        <li className="nav-li navlinkButton-1"/>
                    </Link>
                    <Link to="/skills">
                        <li className="nav-li navlinkButton-2" />
                    </Link>
                    <Link to="/contact">
                        <li className="nav-li navlinkButton-3" />
                    </Link>
                </ul>            
            </div>
        );
    }
}