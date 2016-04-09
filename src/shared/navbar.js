import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

var NavBar = React.createClass({

  render() {
    var styles = {float: 'right', 
                  marginRight: '12px',
                  textDecoration: 'none',
                  fontSize: '1em',
                  color: '#FAEBD7'
                  }
    var styles2 = {float: 'left',
                   textDecoration: 'none',
                   color: '#FAEBD7',
                   fontSize: '2em',
                   marginLeft: '1em'
                 }

    return (
      <div className="nav">
        <Link style={styles2} to={`home`}>#Light-Jar</Link>
        <Link style={styles} to={`goodJar`}>Good-Jar</Link>
        <Link style={styles} to={`goals`}>Goals</Link>
        <Link style={styles} to={`principles`}>Principles</Link>

      </div>
    );
  }
})

export default NavBar;