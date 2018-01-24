import * as React from 'react';

const footer = {
    backgroundColor: '#0f141f',
    padding: '30px'
};

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footerdiv">
                <div style={footer} >
                    <h3 style={{color: 'white', textAlign: 'center'}}>
                        Build with &hearts; by Ankit Kumar Singh
                    </h3>
                </div>
            </div>
        );
    }
}