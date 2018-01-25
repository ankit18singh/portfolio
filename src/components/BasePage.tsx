import * as React from 'react';
import Header from './Header';
import NavButton from './NavButton';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

export default class BasePage extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <NavButton />
                    <Route exact={true} path="/" component={Header}/>
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact}/>
                </div>
            </Router>
        );
    }
}