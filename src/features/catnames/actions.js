const getCatName = (name) => {
  return {
    type: 'GET_CAT_NAME',
    payload: {
      name: name
    }
  }
}

export { getCatName }
