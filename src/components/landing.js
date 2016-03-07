require('../../less/main.less');
'use strict';
import React from "react";
import ReactDom from "react-dom"
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
import Firebase from "firebase"
import {Input} from 'react-bootstrap';
import firebaseUtils from '../utils/firebaseUtils';



var Landing  = React.createClass({
  componentWillMount() {
    this.firebaseRef = new Firebase("https://awesomejar.firebaseio.com");
    console.log(this.firebaseRef)
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleSubmit(e) {
   e.preventDefault();
   firebaseUtils.loginWithFB(function(result){
     if(result){
      console.log('context', this)
       this.context.router.replace('home')
     }
   }.bind(this));
  },

  render (){
    return (
      <div>
        <h1 className="awesome-jar">#Awesome Jar</h1>
        <div className="login">
          <button type="submit" onClick={this.handleSubmit} className="float loginBtn">Login with FB</button>
        </div>
      </div>
    )
  }
})

module.exports = Landing;
