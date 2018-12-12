import React, { Component } from 'react';
import Photo from "../images/foto.jpg"



class PortfolioFired extends Component {
    render() {
        return (
            <div className="portfolio-fixed">
                <img src={Photo} />
                <h1>Cindy S. Mulato</h1>
                <p>Developer</p>
            </div>
        );
    }
}

export default PortfolioFired;

