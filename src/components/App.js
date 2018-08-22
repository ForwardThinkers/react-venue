import React, { Component } from 'react';
import { Element } from 'react-scroll'
import '../resources/styles.css';

import Header from './Header_Footer/Header';
import Featured from './Featured';
import VenueNFO from './VenueNFO';
import Highlights from './Highlights'
import Pricing from './Pricing';
import Location from './Location';
import Footer from './Header_Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={ {height:"1500px", background: "cornflowerblue"} }>
        <Header/>
          <Element name="Featured">
            <Featured/>
          </Element>
        <Element name="Venue NFO">
          <VenueNFO/>
        </Element>
        <Element name="highlights">
          <Highlights/>
        </Element>
        <Element name="Pricing">
          <Pricing/>
        </Element>
        <Element name="Location">
          <Location/>
        </Element>
        <Footer/>
      </div>
    );
  }
}

export default App;
