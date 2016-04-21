var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes.js');
// import { Provider } from 'react-redux';
// import configureStore from './store/configureStore'

// const store = configureStore()

ReactDOM.render(routes , document.getElementById('app'));
