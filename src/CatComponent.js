import React, { Component } from 'react';
import EinsteinQuoteComponent from './EinsteinQuoteComponent.js'


export default class CatComponent extends Component {
  render() {
    return (
      <div className="bar" id="cat">
        <img src="/cat.gif" />
      </div>
    );
  }
}
