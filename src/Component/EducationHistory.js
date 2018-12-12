import React, { Component } from 'react'
import EduTitle from './EduTitle'
// import { eduList } from '../data/datasource';
// import EduTitle component

class EducationHistory extends Component {
  render() {

    /* receive `eduList` array as props from App compnonent */

    return (
      <section>
        <h4>Education</h4>
        <div className="skills-list">

          {
            this.props.edu.map(function (objEdu) {
              return <EduTitle date={objEdu}
              />

            })
            /*</EduTitle>
               map over jobsList array and return an array of <Job/> components
               NOTE: you must pass values from each education object
                     to the <EduTitle> component as props...
             */
          }
        </div>
      </section>
    )
  }
}

export default EducationHistory;
