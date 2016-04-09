import React from 'react';
import ReactDOM from 'react-dom';
import {Input} from 'react-bootstrap';

var InputBox = React.createClass({
  getInitialState() {
    return {value: ''}
  },
  handleChange() {
    this.setState({
      value: this.refs.input.getValue()
    });
  },
  handleSubmit(e) {
    e.preventDefault();
    var date = new Date;
    this.props.jar.push({
      text: this.refs.input.getValue(),
      date: JSON.stringify(date)
    });
    this.setState({value: ""});
  },
  render() {
    console.log('goals props', this.props)
    return(
      <div className="input-box">
        <h3 className="motivation">{this.props.type}</h3>
        <span>
          <Input
            className="jar-text"
            type="text"
            value={this.state.value}
            placeholder=""
            hasFeedback
            ref="input"
            groupClassName="group-class"
            labelClassName="label-class"
            onChange={this.handleChange}
          ></Input>
          <button type="button" className="btn btn-primary btn-block jar-btn" onClick={this.handleSubmit}>Submit</button>
        </span>
      </div>
    )
  }
})

export default InputBox;