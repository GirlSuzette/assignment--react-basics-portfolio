import React from 'react';
import ReactDOM from 'react-dom';
import { skills, eduList, jobsList } from './data/datasource';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './css/styles.css';



ReactDOM.render(<App ski={skills} edu={eduList} job={jobsList} />, document.getElementById('app-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

