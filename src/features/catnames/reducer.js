const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CAT_NAME':
      return handleGetCat(state, action.payload)

    default:
      return state
  }
}

const handleGetCat = (state, payload) => {
  const { name } = payload
  return {
    ...state,
    name: name
  }
}

export default reducer
