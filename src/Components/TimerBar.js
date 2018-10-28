import React, { Component } from 'react';

class TimerBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var timerBarStyle = {
      "width" : "100%",
      "height" : "4vh",
      "backgroundColor" : "green"
    }

    return (
      <div> 
        <div style={timerBarStyle} ></div>
      </div>
    );
  }
}

export default TimerBar;
