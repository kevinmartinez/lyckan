const testAction = (message) => {
  return {
    type: 'test_triggered',
    payload: {
      message: message
    }
  }
}

export { testAction }
