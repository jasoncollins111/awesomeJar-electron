require('../../less/main.less');
'use strict';
import React from "react";
import ReactDom from "react-dom"
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
import Firebase from "firebase"
import {Input} from 'react-bootstrap';



var Landing  = React.createClass({
  componentWillMount() {
    this.firebaseRef = new Firebase("https://awesomejar.firebaseio.com");
    console.log(this.firebaseRef)
  },
  getInitialState() {
    return {
      value: ''
    };
  },
  handleChange() {
    this.setState({
      user: this.refs.user.getValue(),
      password: this.refs.password.getValue()
    });
  },

  handleSubmit(e) {
    e.preventDefault();
    console.log('context', this.context)
    var password = this.refs.password.getValue();
    var email = this.refs.user.getValue()
    this.firebaseRef.createUser({
      password : password,
      email    : email
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });

    this.setState({value: ""});
  },

  render (){
    return (
    <div>
      <video autoPlay loop id="bgvid">
        <source src="./assets/SkyAndClouds.mp4" type="video/mp4" />
      </video>
      <h1 className="awesome-jar">#Awesome Jar</h1>
      <div className="button-container">
        <span>
          <button href="/login" className="landing-buttons"><Link to="/login">Login</Link></button>
          <button href="/signup" className="landing-buttons"><Link to="/signup">Sign Up</Link></button>
        </span>
      </div>
    </div>
    )
  }
})

module.exports = Landing;
