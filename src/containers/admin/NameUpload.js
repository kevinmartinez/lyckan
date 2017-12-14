import React from 'react'

const NameUpload = ({ setName, name }) => {
  return (
    <p>
      <label htmlFor="catname">
        <span>Name: </span>
        <strong>
          <abbr title="required">*</abbr>
        </strong>
      </label>
      <input type="text" onChange={setName} value={name} />
    </p>
  )
}

export default NameUpload
