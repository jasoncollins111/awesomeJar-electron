
var React = require("react");
import {Input} from 'react-bootstrap';
import Home from './home';
import Principles from './firstprinciples';
import ReactFireMixin from 'reactfire';
import InputBox from '../shared/inputBox';

var GoodJar = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState() {
    var fbRef = new Firebase("https://awesomejar.firebaseio.com")
    var userId = fbRef.getAuth().uid;
    var goodList = null;
    return {userId, fbRef, goodList};
  },
  componentWillMount: function() {
    var userId = this.state.userId;
    var good = new Firebase("https://awesomejar.firebaseio.com/user/"+userId+"/goals");
    this.setState({goodList: good})
  },
  render: function(){
    return <div>
      <Home/>
      <InputBox jar={this.state.goodList} type="Good Jar"/>
    </div>
  }
});
export default GoodJar;



