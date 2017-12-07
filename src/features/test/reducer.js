const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'test_triggered':
      return handleTestTriggered(
        state,
        action.payload,
      )
      break

    default: return state
  }
}

const handleTestTriggered = (state, payload) => {
  const { message } = payload
  return {
    ...state,
    message: message
  }
}

export default reducer
