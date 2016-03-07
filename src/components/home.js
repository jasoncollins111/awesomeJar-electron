var React = require("react");
import InputAwesome from './inputAwesome.js';
import Meditation from './meditation.js'
import Jar from './eventsJar.js'
var Home = React.createClass({
  getInitialState() {
    var fbRef = new Firebase("https://awesomejar.firebaseio.com/");
    var userId = fbRef.getAuth().uid;
    return {userId : userId}
  },


  render: function(){
    return <div>
      <InputAwesome user={this.state.userId}/>
      <Jar user={this.state.userId}/>
    </div>
  }
});

module.exports = Home;
