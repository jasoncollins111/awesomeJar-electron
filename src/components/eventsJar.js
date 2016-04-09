import React from 'react'
import ReactDOM from 'react-dom';
import ReactFireMixin from 'reactfire'

var Jar = React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var userId = this.props.user;
    var ref = new Firebase("https://awesomejar.firebaseio.com/user/"+userId+"/items");
    this.bindAsArray(ref, "items")
  },
  render() {
    var items = this.state.items.map((item, index) => {
      return <li className="jar-item flexcontainer" key={index} onClick={this.clickHandler} >{item.text}</li>
    })
    return (
      <div className="jar-info">
        <ul >{items}</ul>
      </div>
    );
  }
})

export default Jar

