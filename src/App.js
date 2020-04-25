import React, { Component } from 'react';
import CatComponent from './CatComponent'
import EinsteinQuoteComponent from './EinsteinQuoteComponent'
import MouseCompenet from './MouseComponent'

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent/>
				<EinsteinQuoteComponent/>    
				<MouseCompenet/>
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;