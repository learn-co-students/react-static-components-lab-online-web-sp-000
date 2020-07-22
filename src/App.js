import React, { Component } from 'react';
import {default as CatComponent} from '../src/CatComponent';
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent';
import MouseComponent from './MouseComponent';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
			</div>
		);
	}
}

export default App;
