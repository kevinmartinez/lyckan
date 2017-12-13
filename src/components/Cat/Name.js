import React from 'react'
import PropTypes from 'prop-types'

const Name = ({ name }) => {
  return <h2>Name: {name}</h2>
}

Name.propTypes = {
  name: PropTypes.string
}

export default Name
