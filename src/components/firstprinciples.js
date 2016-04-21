var React = require("react");
import {Input} from 'react-bootstrap';
import InputBox from '../shared/inputBox';
import NavBar from '../shared/navbar';
import SideBar from '../shared/sidebar';
import Jar from './eventsJar';
import ReactFireMixin from 'reactfire';
import Home from './home'


var Principles = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState() {
    var fbRef = new Firebase("https://awesomejar.firebaseio.com")
    var userId = fbRef.getAuth().uid;
    var principles = null;
    return {fbRef, userId, principles};
  },
  componentWillMount: function() {
    var userId = this.state.userId;
    var principlesList = new Firebase("https://awesomejar.firebaseio.com/user/"+this.state.userId+"/principles");
    this.setState({principles : principlesList}) ;
  },

  render: function(){
    console.log('principles state', this.state)
    return <div>
      
      <Home/>
      <InputBox jar={this.state.principles} type="Principles"/>
    </div>
  }
});
export default Principles;



