import React, { Component } from 'react';
import CatComponent from './CatComponent'
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent'
import MouseComponent from './MouseComponent';
import EinsteinQuoteComponent from './EinsteinQuoteComponent'

class App extends Component {
	render() {
		return (
			<div className="App">
				<CatComponent />
				<EinsteinQuoteComponent />
				<MouseComponent />
				{/* <GraceHopperQuoteComponent /> */}
			</div>
		)
	}
}

export default App
