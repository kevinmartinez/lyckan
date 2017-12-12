const getCatName = (image, name, description) => {
  return {
    type: 'GET_CAT_NAME',
    payload: {
      image: image,
      name: name,
      description: description
    }
  }
}

export { getCatName }
