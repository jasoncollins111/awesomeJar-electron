var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
console.log('in routes')
// var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../main.js');
console.log('after main')
var Register = require('../entry.js');
// var Login = require("../components/login-register/Login");
// var Logout = require('../components/login-register/Logout');
// var Dashboard = require('../components/secure/Dashboard');
// var Home = require("../components/Home");
// var requireAuth = require('../utils/authenticated')
console.log('routes1')
var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>

    </Route>
  </Router>
);
console.log('routes')
module.exports = routes;
