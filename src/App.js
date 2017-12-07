import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import test from './features/test/'

class App extends Component {

  componentDidMount() {
    const { testTriggered } = this.props

    testTriggered()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStateToProps() { }
function mapDispatchToProps(dispatch) {
  return {
    testTriggered: () => {
      dispatch(test.actions.testAction('KEVVIIIN'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
