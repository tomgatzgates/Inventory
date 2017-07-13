import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import AppRouter from './AppRouter';

class App extends Component {
  render() {
    console.log(this.props.children);
    return (
      <div className="App">
        <div className="App-container">
          <AppRouter />
        </div>
      </div>
    );
  }
}

export default App;
