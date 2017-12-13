import React from 'react'
import NameUpload from './NameUpload'
import DescriptionUpload from './DescriptionUpload'
import ImageUpload from './ImageUpload'
import { getName } from '../../features/cat/selectors'

const CatAdmin = ({ setName, setDescription, name, description }) => {
  return (
    <form>
      <ImageUpload imgUploadInfo="Drag Your Image here Or Search in Files" />
      <NameUpload name={name} setName={setName} />
      <DescriptionUpload description={description} getDescription={getDescription} />
      <button>Submit</button>
    </form>
  )
}

export default CatAdmin
