import React, { Component } from 'react';
import PortfolioContent from './Component/PortfolioContent';
import PortfolioFired from './Component/PortfolioFired';




class App extends Component {
  render() {
    return (
      < div id=" app-container " >
        < PortfolioContent Porf={this.props.ski} edu={this.props.edu} job={this.props.job} />
        < PortfolioFired />
      </div>
    );
  }
}

export default App;
