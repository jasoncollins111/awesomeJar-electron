var React = require("react");

import NavBar from '../shared/navbar';
import SideBar from '../shared/sidebar';
import Goals from './goals'
import Principles from './firstprinciples';
import Jar from './eventsJar';
import ReactFireMixin from 'reactfire';


var Home = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState() {
    var fbRef = new Firebase("https://awesomejar.firebaseio.com")
    var userId = fbRef.getAuth().uid;
    return {userId : userId};
  },
  componentWillMount: function() {
    var userId = this.state.userId;
    var principleList = new Firebase("https://awesomejar.firebaseio.com/user/"+userId+"/principles");
    this.bindAsArray(principleList, "principles");
  },
  render: function(){
    return <div>
      <NavBar/>
      <SideBar user={this.state.userId} principles={this.state.principles}/>
    </div>
  }
});

export default Home;
