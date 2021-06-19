import React from 'react'
import { SecContainer, Btn, Title, Desc, SecImage, TextContainer, ImgWrapper } from './InfoSection.elements'

function InfoSection({ title, description, imageLink, color_red, reverse }) {
   return (
      <SecContainer reverse={reverse}>
         <TextContainer>
            <Title>{title}</Title>
            <Desc>{description}</Desc>
            <Btn color_red={color_red}>Learn more</Btn>
         </TextContainer>

         <ImgWrapper reverse={reverse}>
            <SecImage src={imageLink} />
         </ImgWrapper>
      </SecContainer>
   )
}

export default InfoSection
