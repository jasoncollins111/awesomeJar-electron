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
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleSubmit(e) {
   e.preventDefault();
   firebaseUtils.loginWithFB(function(result){
     if(result){
      console.log('result', result)
      var {displayName} = result.facebook;
      var {profileImageURL} = result.facebook
      this.context.router.replace('home')
     }
   }.bind(this));
  },

  render (){
    var style = {clear:'both'}
    return (
      <div>
        <h1 className="awesome-jar">#Light-Jar</h1>
        <div style={style}></div>

        <div className="container" onClick={this.handleSubmit}>
        <div className="square black">
        <div className="square3">
        <div className="square black">
        <div className="square2">
        <div className="square black">
        <div className="square3">
        <div className="square black">
        <div className="square2">
        <div className="square4 black">
        <div className="square3">
        <div className="square black">
        <div className="square2">
        <div className="square black">
        <div className="square4">
        <div className="square black">
        <div className="square2">
        <div className="square black">
        <div className="square3">
        <div className="square4 black">
        <div className="square2">
        <div className="square black">
        <div className="square2">
        <div className="square3 black">
        <div className="square4">
        <div className="square3 black">
        <div className="square2">
        <div className="square3 black">
        <div className="square4">
        <div className="square2 black">
        <div className="square3">
        <div className="square2 black">
        <div className="square3">
        <div className="square4 black">
        <div className="square3">
        <div className="square2 black">
        <div className="square3">
        <div className="square4">
        <div className="square2 black">
        <div className="square4">
        <div className="square2 black">
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
})

module.exports = Landing;
