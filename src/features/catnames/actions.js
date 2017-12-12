// @flow
const getCatName = (name: string) => {
  return {
    type: 'GET_CAT_NAME',
    payload: {
      name: name
    }
  }
}

export { getCatName }
