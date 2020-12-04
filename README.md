# classification-banner

A simple React component to put a classification banner at the top and bottom of an app.

## Features

Provides the generally accepted colors for unclassified, confidential, secret, top secret and
top secret//sci markings.

## Install

````bash
npm install --save '@mobdata/classification-banner'
````

## Usage

````js
import React, { Component } from 'react';
import ClassificationBanner from '@mobdata/classification-banner';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassificationBanner classification="unclassified"/>
        <div style={{ paddingTop: '100px' }}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
````

## License

`classification-banner` is released under the MIT license.

