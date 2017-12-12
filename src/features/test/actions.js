const testAction = message => {
  return {
    type: 'test_triggered',
    payload: {
      message: message
    }
  }
}

const messageChanged = message => {
  return {
    type: 'MESSAGE_CHANGED',
    payload: {
      message: message
    }
  }
}

export { testAction, messageChanged }
