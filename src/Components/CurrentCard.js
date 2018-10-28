import React, { Component } from 'react';

class CurrentCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var currentCardStyle = {
      width: "20%",
      height : "40vh",
      backgroundColor: "black",
      color : "white",
      borderRadius: "3%"
    }

    return (
      <div style={currentCardStyle}> 
        <p>{this.props.cardText}</p>
      </div>
    );
  }
}

export default CurrentCard;
