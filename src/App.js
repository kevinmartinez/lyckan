import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import test from './features/test/'
import MessageForm from './components/MessageForm';
import Cat from './components/Cat/Cat';
import CatAdmin from './components/admin/CatAdmin';

// helper functions

class App extends Component {

  componentDidMount() {
    const { testTriggered } = this.props

    testTriggered()
  }

  changeMessage = (event) => {
    const { messageChanged } = this.props
    const message = event.target.value
    messageChanged(message)
  }

  render() {
    // console.log(this.props)
    console.log(changeMessage)
    const { message, changeMessage, title } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Lyckan</h1>
        </header>
        <Cat />
        <CatAdmin />
        <MessageForm messageChange={this.changeMessage}/>
        <p>{message}</p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }


}



const mapStateToProps = (state) => {
  return {
    message: test.selectors.showMessage(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    testTriggered: () => {
      dispatch(test.actions.testAction('KEVVIIIN'))
    },
    // dispatch messageChanged :O
    messageChanged: (message) => {
      dispatch(test.actions.messageChanged(message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
