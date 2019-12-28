import React, { Component } from 'react';

// either export default so no use for {} or just default the class each export.

export default class EinsteinQuoteComponent extends Component {
	render() {
		return (
			<div className="bar" id="einstein">
				<i>
					<p>
						&quot;Life is like riding a bicycle. To keep your balance you must
						keep moving&quot;
					</p>
				</i>
				<br />
				&#9;-Einstein
			</div>
		);
	}
}
