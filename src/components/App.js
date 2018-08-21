import React, { Component } from 'react';
import '../resources/styles.css';

import Header from './Header_Footer/Header';
import Featured from './Featured';
import VenueNFO from './VenueNFO';
import Highlights from './Highlights'

class App extends Component {
  render() {
    return (
      <div className="App" style={ {height:"1500px", background: "cornflowerblue"} }>
        <Header/>
        <Featured/>
        <VenueNFO/>
        <Highlights/>
      </div>
    );
  }
}

export default App;
