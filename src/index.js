import ParentsComponent from './components/index';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<ParentsComponent />, app)