import React, { Component } from 'react';
import MouseComponent from './MouseComponent.js';
import CatComponent from './CatComponent.js';
import EinsteinQuoteComponent from './EinsteinQuoteComponent.js';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<EinsteinQuoteComponent />
				<MouseComponent />
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;
