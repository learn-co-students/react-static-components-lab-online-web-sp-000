import React, { Component } from 'react';
import CatComponent from './CatComponent';
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;
