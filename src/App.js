import React, { Component } from 'react';
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent'
import CatComponent from './CatComponent'
import MouseEvent from './MouseComponent'

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
        <MouseEvent />
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;
