import React from 'react'
import { HeroContainer, HeroTitle } from './Hero.elements'
import { Image } from '../../GlobalStyles'

function Hero({ imageLink }) {
   return (
      <HeroContainer>
         <Image src={imageLink} />
         <HeroTitle>We are creatives</HeroTitle>
      </HeroContainer>
   )
}

export default Hero
