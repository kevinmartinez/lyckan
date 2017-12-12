// @flow
const reducer = (state : Object = {}, action) => {
  switch (action.type) {
    case 'GET_CAT_NAME':
      return handleGetCatName(
        state,
        action.payload,
      )

      default: return state
  }
}

const handleGetCatName = (state, payload) => {
  const { name } = payload
  return {
    ...state,
    name: name,
  }
}

export default reducer
