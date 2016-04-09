var React = require("react");
import {Input} from 'react-bootstrap';

import NavBar from '../shared/navbar';
import SideBar from '../shared/sidebar';
import Principles from './firstprinciples';
import Jar from './eventsJar';
import ReactFireMixin from 'reactfire';
import Home from './home'

var InputAwesome = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState() {
    var fbRef = new Firebase("https://awesomejar.firebaseio.com")
    var userId = fbRef.getAuth().uid;
    return {
      userId : userId,
      value: ''
    };
  },
  componentWillMount: function() {
    var userId = this.state.userId;
    this.jar = new Firebase("https://awesomejar.firebaseio.com/user/"+userId+"/items")
    var principlesList = new Firebase("https://awesomejar.firebaseio.com/user/"+userId+"/principles");
    this.bindAsArray(principlesList, "principles");
  },
  handleChange() {
    this.setState({
      value: this.refs.input.getValue()
    });
  },
  handleSubmit(e) {
    e.preventDefault();
    this.jar.push({
      text: this.refs.input.getValue(),
      date: new Date(),
    });
    this.setState({value: ""});
  },
  render: function(){
    return <div>
      
      <Home/>
      <div className="input-box">
        <h3 className="motivation">Good Jar</h3>
        <span>
          <Input
            className="jar-text"
            type="text"
            value={this.state.value}
            placeholder=""
            hasFeedback
            ref="input"
            groupClassName="group-class"
            labelClassName="label-class"
            onChange={this.handleChange}
          ></Input>
          <button type="button" className="btn btn-primary btn-block jar-btn" onClick={this.handleSubmit}>Submit</button>
        </span>
      </div>
    </div>
  }
});
export default InputAwesome;



