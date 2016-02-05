
import React from 'react'

export default React.createClass({
  componentWillMount: function() {
    const instructions = [
      'Take 3 deep breaths',
      'Think about something you are very grateful for', ]
    this.indx = 0;
    this.instructions = instructions;
    console.log('instructions', this.instructions)
  },
  getInitialState() {
    return {
      value: 'Get into a comfortable position'
    };
  },
  componentDidMount: function(){
    console.log(this)
    var ind = this.indx
    var instruct = this.instructions;
    var that = this
    for(let i = 0; i < instruct.length; i++){
       setTimeout(() =>that.setState({value: instruct[i]}),(i+1)*3000)
    }
  },

  render(){
    console.log(this.instructions)
    return (
    <div>
      <h1>{this.state.value}</h1>
    </div>

  )}

})
