import React, { Component } from 'react';
import '../resources/styles.css';

import Header from './Header_Footer/Header';
import Featured from './Featured';

class App extends Component {
  render() {
    return (
      <div className="App" style={ {height:"1500px", background: "cornflowerblue"} }>
        <Header/>
        <Featured/>
      </div>
    );
  }
}

export default App;
