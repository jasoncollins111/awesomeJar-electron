require('../less/main.less');
'use strict';
import React from "react";
import ReactDom from "react-dom"
import Firebase from "firebase"
import {Input} from 'react-bootstrap';



var App  = React.createClass({
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
    <h1 className="awesome-jar">#Awesome Jar</h1>
    <div className="login">
      <div className="heading">
        <h2>Sign Up</h2>
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
            <span className="input-group-addon"><i className="fa fa-user"></i></span>
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

ReactDom.render((<App/>), document.getElementById('content'))

