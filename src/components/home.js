var React = require("react");
import InputAwesome from './jarSubmit.js';
import Meditation from './meditation.js'
var Home = React.createClass({
  render: function(){
    return <div>
      <InputAwesome/>
      <Meditation/>
    </div>
  }
});

module.exports = Home;
