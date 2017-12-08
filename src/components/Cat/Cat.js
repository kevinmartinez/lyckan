import React from 'react'
import Name from './Name';
import Description from './Description'
import ProfileImage from './ProfileImage'
import styled from 'styled-components'

const Figure = styled.figure`
  max-width: 700px;
  background: #7ceece;
  padding: 15px;
`;

const Cat = () => {
  return (
    <Figure>
      <ProfileImage image="https://placeimg.com/640/480/animals"/>
      <figcaption>
        <Name name="Bosse" />
        <Description text="This is Bosse, he is a wild one. Bacon ipsum dolor amet tail spare ribs short loin bacon, turkey drumstick venison. Salami filet mignon turducken kevin pork chop, ball tip pig pastrami ribeye bresaola. Strip steak pig porchetta pork loin short ribs pancetta andouille t-bone. Kevin pork chop landjaeger, short loin hamburger chicken pork loin frankfurter alcatra bresaola burgdoggen tenderloin. Meatball fatback tri-tip shoulder t-bone burgdoggen ball tip. Chicken beef salami chuck short loin porchetta. Prosciutto cupim turkey, leberkas biltong pancetta tongue ham. Frankfurter pork chop cow alcatra buffalo cupim flank biltong picanha ham hock shank ham andouille. Alcatra hamburger capicola rump ham hock tri-tip. Fatback swine flank meatloaf porchetta ribeye t-bone pig alcatra. Cow jerky alcatra tongue kevin. Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!"/>
      </figcaption>
    </Figure>
  )
}

export default Cat
