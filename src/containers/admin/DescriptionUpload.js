import React from 'react'

const DescriptionUpload = ({ setDescription, description }) => {
  return (
    <p>
      <textarea value={description} id="" cols="30" rows="10" onChange={setDescription} />
    </p>
  )
}

export default DescriptionUpload
