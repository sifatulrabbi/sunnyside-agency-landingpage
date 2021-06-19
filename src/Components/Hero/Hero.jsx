import React from 'react'
import StyleData from '../../Style.data'
import { HeroContainer, HeroTitle } from './Hero.elements'
import { Image } from '../../GlobalStyles'

function Hero() {
   const desktop_img = StyleData.image.desktop.hero

   return (
      <HeroContainer>
         <Image src={desktop_img} />
         <HeroTitle>We are creatives</HeroTitle>
      </HeroContainer>
   )
}

export default Hero
