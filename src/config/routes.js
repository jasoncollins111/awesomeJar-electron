'use strict';
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Login = require('../components/login.js');
var Landing = require('../components/landing.js');
var Register = require('../components/signUp.js');
var Main = require('../components/main.js')
var Home = require("../components/home.js");
var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Landing} />
      <Route path='signup' component={Register} />
      <Route path='login' component={Login} />
    </Route>
  </Router>
);
console.log('routes')
module.exports = routes;
