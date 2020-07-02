import React, { Component } from 'react';
import CatComponent from './CatComponent.js'
import {GraceHopperQuoteComponent} from './GraceHopperQuoteComponent.js'
import MouseComponent from './MouseComponent.js'

class App extends Component {
render() {
    return (
      <div className="App">
        <CatComponent />
        <GraceHopperQuoteComponent />
        <MouseComponent />
      </div>
    );
  }
}

//this is return ing components that have being imported from the other js files...

export default App;
