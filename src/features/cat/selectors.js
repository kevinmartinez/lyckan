const getName = state => {
  return state.cat.name
}

// Selector for GET the description
const getDescription = state => {
  return state.cat.description
}

export { getName, getDescription }
