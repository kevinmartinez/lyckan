const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'test_triggered':
      return handleTestTriggered(
        state,
        action.payload,
      )
    case 'MESSAGE_CHANGED':
      return handleMessageChanged(
        state,
        action.payload
    )

    default: return state
  }
}

const handleTestTriggered = (state, payload) => {
  const { message } = payload
  return {
    ...state,
    message: message,
    name: 'kevin'
  }
}

const handleMessageChanged = (state, payload) => {
  const { message } = payload
  return {

    message: message
  }
}

export default reducer
