import React, { Component } from 'react';

export default class CatComponent extends Component {
  render() {
    return (
      // eslint-disable-next-line
      <div className="bar" id="cat">
      // eslint-disable-next-line
        <img src="/cat.gif" alt= "cat"/>
      </div>
    );
  }
}
