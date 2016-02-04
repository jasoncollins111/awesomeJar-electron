var React = require('react');
import firebaseUtils from '../utils/firebaseUtils'

module.exports = React.createClass({
  getInitialState: function(){
    return {
      loggedIn: firebaseUtils.isLoggedIn()
    }
  },
  handleLogout: function(loggedIn){
    this.setState({
      loggedIn: loggedIn
    });
  },
  componentWillMount: function(){
    firebaseUtils.onChange = this.handleLogout;
  },
  render() {
    if(this.state.loggedIn){
      console.log('loggedIn main')
    }
    return <div>
      <video autoPlay loop id="bgvid">
          <source src="./assets/SkyAndClouds.mp4" type="video/mp4" />
      </video>
      <div>
        {this.props.children}
      </div>
    </div>
  }
});
