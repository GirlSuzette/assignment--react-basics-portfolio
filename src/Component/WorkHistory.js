import React, { Component } from 'react'
// import { jobsList } from '../data/datasource';
import Job from './Job'
// import Job components

class WorkHistory extends Component {
  render() {
    console.log('???');
    /* receive `jobsList` array as props from App compnonent */

    return (
      <section>
        <h4>Work Experience</h4>
        <div className="skills-list">
          {
            this.props.job.map(function (objJob) {
              return <Job description={objJob}
              />
            })
            /*
              map over jobsList array and return an array of <Job/> components
              NOTE: you must pass values from the each job object
                    to the <Job> component as props...
            */
          }
        </div>
      </section>
    )
  }
}

export default WorkHistory;
