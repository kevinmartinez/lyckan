import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  max-width: 100%;
  border: 5px solid goldenrod;
  color: blue;
`

const ProfileImage = ({ image }) => {
  return <Image src={image} alt="" />
}

export default ProfileImage
