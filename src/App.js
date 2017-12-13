import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import test from './features/test'
import cat from './features/cat'
import MessageForm from './components/MessageForm'
import Cat from './components/Cat/Cat'
import CatAdmin from './components/admin/CatAdmin'

// helper functions

class App extends Component {
  componentDidMount() {
    // const { testTriggered } = this.props
    // testTriggered()
  }

  changeMessage = event => {
    const { messageChanged } = this.props
    const message = event.target.value
    messageChanged(message)
  }

  // Get Cats name ?? Function name, more specific?
  setCatName = event => {
    const { nameChanged } = this.props
    const name = event.target.value
    nameChanged(name)
  }

  setCatDescription = event => {
    const { descriptionChanged } = this.props
    const description = event.target.value
    descriptionChanged(description)
  }

  render() {
    const { message, changeMessage, title, name, description } = this.props
    console.log('RERENDERED:', name)
    console.log('RERENDERED:'.description)
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Lyckan</h1>
        </header> */}
        {/* <Cat /> */}
        <CatAdmin setName={this.setCatName} name={name} getDescription={this.setCatDescription} />
        <MessageForm messageChange={this.changeMessage} />
        <p>{message}</p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    message: test.selectors.showMessage(state),
    name: cat.selectors.getName(state),
    description: cat.selectors.changeDescription(state)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // testTriggered: () => {
    //   dispatch(test.actions.testAction('KEVVIIIN'))
    // },
    // dispatch messageChanged :O
    messageChanged: message => {
      dispatch(test.actions.messageChanged(message))
    },
    nameChanged: name => {
      dispatch(cat.actions.nameChanged(name))
    },
    descriptionChanged: description => {
      dispatch(cat.actions.descriptionChanged(description))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
