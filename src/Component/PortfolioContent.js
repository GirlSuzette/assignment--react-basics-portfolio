import React, { Component } from 'react';
import Summary from './Summary';
import Contactinfo from './ContactInfo';
import Header from './Header';



class PortfolioContent extends Component {
    render() {
        return (
            <React.Fragment>
                < Header />
                < Summary />
                < Contactinfo />
            </ React.Fragment>
        );
    }
}

export default PortfolioContent;