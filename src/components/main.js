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
      loggedIn: firebaseUtils.logout()
    });
  },
  componentWillMount: function(){
    firebaseUtils.onChange = this.handleLogout;
  },
  render() {
    if(this.state.loggedIn){
      console.log('loggedIn')
    }
    return <div>

      <div>
        {this.props.children}
      </div>
    </div>
  }
});
