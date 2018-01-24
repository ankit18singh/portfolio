import * as React from 'react';
import Header from './Header';
import NavButton from './NavButton';
import About from './About';
// import Contact from './Contact';
import Footer from './Footer';

export default class BasePage extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <NavButton />
                <About />
                {/* <Contact /> */}
                <Footer />
            </div>
        );
    }
}