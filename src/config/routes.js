'use strict';
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Landing = require('../components/landing.js');
var Main = require('../components/main.js');
var Home = require("../components/home.js");
var Goals = require('../components/goals.js');
var Principles = require('../components/firstprinciples.js');
import GoodJar from '../components/goodjar'
import requireAuth from '../utils/authenticated.js'
var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Landing} />
      <Route path='login' component={Landing} />
      <Route path='home' component={Home}/>
      <Route path='goodJar' component={GoodJar}/>
      <Route path='goals' component={Goals}/>
      <Route path='principles' component={Principles}/>
    </Route>
  </Router>
);
module.exports = routes;
