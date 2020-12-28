import React, { Component } from 'react';
import CatComponent from './CatComponent.js'
import {GraceHopperQuoteComponent} from './GraceHopperQuoteComponent.js'
import MouseComponoent from './MouseComponent'

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponoent />
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;
