import React, { Component } from 'react';
import {Row, Col} from 'react-flexbox-grid'
import logo from './logo.svg';
import './App.css';

//Internal
import CurrentCard from "./Components/CurrentCard.js"
import TimerBar from "./Components/TimerBar.js"
import OwnCards from "./Components/OwnCards.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimerBar />
          <Col style={{marginTop: "1%"}} xs={12}>
          <Row center="xs">
              <CurrentCard cardText="Är det bara jag som är taggad på..." /> 
            </Row>
          </Col>
          <OwnCards />
      </div>
    );
  }
}

export default App;
