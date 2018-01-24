import * as React from 'react';
import { scroll } from '../utils/scroll';

/* tslint:disable no-any */
export interface NavButtonState {
    transform: any;
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
                    <li className="nav-li navlinkButton"/>
                    <li className="nav-li navlinkButton-1"/>
                    <li className="nav-li navlinkButton-2"/>
                    <li className="nav-li navlinkButton-3"/>
                </ul>            
            </div>
        );
    }
}