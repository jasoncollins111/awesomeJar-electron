import React from 'react'
import {Input} from 'react-bootstrap';
import Firebase from 'firebase'

const InputAwesome = React.createClass({
  componentWillMount() {
    var userId = this.props.user;
    this.jar = new Firebase("https://awesomejar.firebaseio.com/user/"+userId+"/items");
  },
  getInitialState() {
    return {
      value: ''
    };
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

  render() {
    return (
      <div className="good-input">
        <h3 className="motivation">Good things happen!</h3>
        <span>
          <Input
            className="jar-text"
            type="textarea"
            value={this.state.value}
            placeholder="Enter something awesome"
            hasFeedback
            ref="input"
            groupClassName="group-class"
            labelClassName="label-class"
            onChange={this.handleChange}
          ></Input>
          <button type="button" className="btn btn-primary btn-block jar-btn" onClick={this.handleSubmit}>Submit</button>
        </span>
      </div>
    );
  }
});
export default InputAwesome


