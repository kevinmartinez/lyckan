/* Actions are payloads of information that
send data from your application to your store.
They are the only source of information for the store
*/
/* Actions SET */
const nameChanged = name => {
  return {
    type: 'NAME_CHANGED',
    payload: {
      name: name
    }
  }
}

const descriptionChanged = description => {
  return {
    type: 'DESCRIPTION_CHANGED',
    payload: {
      description: description
    }
  }
}

export { nameChanged, descriptionChanged }
