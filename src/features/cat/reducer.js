/*
Actions describe the fact that something happened,
but don't specify how the application's state changes in response.
This is the job of reducers.
*/
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'NAME_CHANGED':
      return handleNameChanged(state, action.payload)
    case 'DESCRIPTION_CHANGED':
      return handleDescriptionChanged(state, action.payload)

    default:
      return state
  }
}

const handleNameChanged = (state, payload) => {
  const { name } = payload
  return {
    ...state,
    name: name
  }
}

const handleDescriptionChanged = (state, payload) => {
  const { description } = payload
  return {
    ...state,
    description: description
  }
}

export default reducer
