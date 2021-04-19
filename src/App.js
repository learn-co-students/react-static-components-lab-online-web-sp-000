import React, { Component } from 'react';
import CatComponent from './CatComponent';
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent';
import MouseComponenet from './MouseComponent';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponenet />
			</div>
		);
	}
}

export default App;
