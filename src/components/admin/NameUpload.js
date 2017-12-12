import React from 'react'

const NameUpload = ({ name }) => {
  return (
    <p>
      <label htmlFor="catname">
        <span>Name: </span>
        <strong>
          <abbr title="required">*</abbr>
        </strong>
      </label>
      <input type="text" id="catname" name="catname" value={name} />
    </p>
  )
}

export default NameUpload
