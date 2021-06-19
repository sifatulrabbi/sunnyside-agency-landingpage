import React, { useState, useEffect } from 'react'
import { Hero, InfoSection, DesignSection } from '../../Components'
import { Data } from './Home.data'

function Home() {
   const [isMobile, setIsMobile] = useState(false)
   const [isMobileHero, setIsMobileHero] = useState(false)

   const handleResize = () => {
      if (window.innerWidth <= 800) {
         setIsMobile(true)
      } else setIsMobile(false)

      if (window.innerWidth <= 420) {
         setIsMobileHero(true)
      } else setIsMobileHero(false)
   }

   useEffect(() => {
      handleResize()

      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
   }, [])

   return (
      <>
         <Hero imageLink={isMobileHero ? Data.hero_image_mbl : Data.hero_image_dsk} />
         {Data.InfoSection.map((section) => (
            <InfoSection
               key={section.id}
               title={section.title}
               description={section.description}
               imageLink={isMobile ? section.image_mbl : section.image_dsk}
               color_red={section.color_red}
               reverse={section.reverse}
            />
         ))}
         <DesignSection data={Data.DesignSection} isMobile={isMobile} />
      </>
   )
}

export default Home
