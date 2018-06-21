import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';


const app = document.getElementById( 'appId' );
ReactDOM.render( <IndecisionApp options={ ['Neha', 'Smita'] }/>, app );
