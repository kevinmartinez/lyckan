import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  width: 500px;
  height: 300px;
  margin: 0 auto;
  padding-top: 5%;
  background: #fffff7;
  border: 2px dotted #000;
`;

const ImageUpload = ({imgUploadInfo}) => {
  return (
    <Div>
      {imgUploadInfo}
    </Div>
  )
}

export default ImageUpload
