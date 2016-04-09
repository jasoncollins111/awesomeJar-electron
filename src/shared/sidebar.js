import React from 'react';
import ReactDOM from 'react-dom';

var SideBar = React.createClass({

  render() {
    var listStyles = {width: '78%'}
    var navHeaderStyle = {
      textDecoration: 'underline',
      marginBottom: '1.5vh',
      marginTop: '2vh'
    }
    console.log(this.props.principles)
    var items = this.props.principles.map((item, index) => {
      return <li style={listStyles} className="jar-item flexcontainer" key={index} onClick={this.clickHandler} >{item.text}</li>
    })
    return (
      <div className="sidebar">
        <h3 style={navHeaderStyle}>First Principles</h3>
        <ul >{items}</ul>
      </div>
    );
  }
})

export default SideBar;