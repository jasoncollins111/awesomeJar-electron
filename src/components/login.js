require('../../less/main.less');
'use strict';
import React from "react";
import ReactDom from "react-dom"
import Firebase from "firebase"
import {Input} from 'react-bootstrap';
import firebaseUtils from '../utils/firebaseUtils';



var SignIn  = React.createClass({
  componentWillMount() {
    this.firebaseRef = new Firebase("https://awesomejar.firebaseio.com");
    console.log(this.firebaseRef)
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
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
    var pw = this.refs.password.getValue();
    var email = this.refs.user.getValue()
    firebaseUtils.loginWithPW({email: email, password: pw}, function(){
      var location = this.props.location
      console.log('location', location)
      console.log('context', this.context)
      this.context.router.replace('home')
    }.bind(this));

    this.setState({value: ""});
  },

  render (){
    return (
    <div>
      <video autoPlay loop id="bgvid">
        <source src="./assets/SkyAndClouds.mp4" type="video/mp4" />
      </video>
      <h1 className="awesome-jar">#Awesome Jar</h1>
      <div className="login">
        <div className="heading">
          <form action="#">
            <div className="input-group input-group-lg">
              <span className="input-group-addon"><i className="fa fa-user"></i></span>
              <Input
                type="text"
                ref="user"
                value={this.state.user}
                className="form-control"
                placeholder="Username or email"
                onChange={this.handleChange}
              ></Input>
            </div>
            <div className="input-group input-group-lg">
              <span className="input-group-addon"><i className="fa fa-lock"></i></span>
              <Input
                type="password"
                ref="password"
                value={this.state.password}
                className="form-control"
                placeholder="Password"
                onChange={this.handleChange}
              ></Input>
            </div>
            <button type="submit" onClick={this.handleSubmit} className="float">Login</button>
          </form>
        </div>
      </div>
    </div>
    )
  }
})

module.exports = SignIn;

