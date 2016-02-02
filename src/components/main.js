var React = require('react');

module.exports = React.createClass({

  render() {
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
