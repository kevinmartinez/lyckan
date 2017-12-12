import React from 'react'
import NameUpload from './NameUpload'
import DescriptionUpload from './DescriptionUpload'
import ImageUpload from './ImageUpload'

const CatAdmin = () => {
  return (
    <form>
      <ImageUpload imgUploadInfo="Drag Your Image here Or Search in Files" />
      <NameUpload name="Kalle" />
      <DescriptionUpload description="blabalbal" />
    </form>
  )
}

export default CatAdmin
