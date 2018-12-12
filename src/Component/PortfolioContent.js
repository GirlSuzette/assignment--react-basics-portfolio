import React, { Component } from 'react';
import Summary from './Summary';
import Contactinfo from './ContactInfo';
import Header from './Header';
import EducationHistory from './EducationHistory';
import WorkHistory from './WorkHistory';
import SkillsList from './SkillsList';



class PortfolioContent extends Component {
    render() {
        return (
            <React.Fragment>
                < Header />
                < Summary />
                < Contactinfo />
                < SkillsList Cont={this.props.Porf} />
                < EducationHistory edu={this.props.edu} />
                < WorkHistory job={this.props.job} />
            </ React.Fragment>
        );
    }
}

export default PortfolioContent;