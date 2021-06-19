import React from 'react'
import { HeroContainer, HeroTitle, DownArrow } from './Hero.elements'
import { Image } from '../../GlobalStyles'

function Hero({ imageLink }) {
   return (
      <HeroContainer>
         <Image src={imageLink} />
         <HeroTitle>We are creatives</HeroTitle>
         <DownArrow src={require('../../images/icon-arrow-down.svg').default} />
      </HeroContainer>
   )
}

export default Hero
