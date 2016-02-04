require('../../less/main.less');
'use strict';
import React from "react";
import ReactDom from "react-dom"
import Firebase from "firebase"
import {Input} from 'react-bootstrap';
import firebaseUtils from '../utils/firebaseUtils.js'


var SignUp  = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentWillMount() {
    console.log('mounted in SignUp')
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

  handleSubmit: function(e){
    e.preventDefault();
    var pw = this.refs.password.getValue();
    var email = this.refs.user.getValue()
    firebaseUtils.createUser({email: email, password: pw}, function(result){
      if(result){
        this.context.router.replace('/')
      }
    }.bind(this));
  },

  render (){
    return (
    <div>
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
          <button type="submit" onClick={this.handleSubmit} className="float">Sign Up</button>
        </form>
      </div>
    </div>
    </div>
    )
  }
})

module.exports = SignUp;

