import React, { Component } from 'react';
import PortfolioContent from './Component/PortfolioContent';
import PortfolioFired from './Component/PortfolioFired';



class App extends Component {
  render() {
    return (
      < div id=" app-container " >
        < PortfolioContent />
        < PortfolioFired />
      </div>
    );
  }
}

export default App;
