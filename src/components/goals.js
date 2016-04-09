
var React = require("react");
import {Input} from 'react-bootstrap';
import Home from './home';
import Principles from './firstprinciples';
import ReactFireMixin from 'reactfire';
import InputBox from '../shared/inputBox';

var Goals = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState() {
    var fbRef = new Firebase("https://awesomejar.firebaseio.com")
    var userId = fbRef.getAuth().uid;
    return {userId : userId};
  },
  componentWillMount: function() {
    var userId = this.state.userId;
    this.goalsList = new Firebase("https://awesomejar.firebaseio.com/user/"+userId+"/goals");
  },
  render: function(){
    return <div>
      <Home/>
      <InputBox jar={this.goalsList} type="Goals"/>
    </div>
  }
});
export default Goals;



