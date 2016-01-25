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
    console.log(this.refs.input.getValue())
    this.setState({

      email: this.refs.input.getValue()
    });
  },
  handleSubmit(e) {
    e.preventDefault();
    this.firebaseRef.createUser({
      email    : this.refs.input.getValue(),
      password : this.refs.input.getValue()
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
        <h2>Sign in</h2>
        <form action="#">

          <div className="input-group input-group-lg">
            <span className="input-group-addon"><i className="fa fa-user"></i></span>
            <Input
              type="textarea"
              ref="input"
              email={this.state.value}
              className="form-control"
              placeholder="Username or email"
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

