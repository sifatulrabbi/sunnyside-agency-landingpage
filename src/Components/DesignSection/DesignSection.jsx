import React from 'react'
import { SecContainer, SecImage, SecTitle, SecDesc, Preview, TextContainer } from './DesignSection.elements'

const DesignSection = ({ data, isMobile }) => {
   return (
      <SecContainer>
         {data.map((section) => (
            <Preview key={section.id} color_cyan={section.color_cyan}>
               <SecImage src={isMobile ? section.image_mbl : section.image_dsk} />
               <TextContainer>
                  <SecTitle>{section.title}</SecTitle>
                  <SecDesc>{section.description}</SecDesc>
               </TextContainer>
            </Preview>
         ))}
      </SecContainer>
   )
}

export default DesignSection
