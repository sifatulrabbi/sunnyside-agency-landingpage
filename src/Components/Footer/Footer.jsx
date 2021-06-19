import React from 'react'
import { FooterContainer, SiteMap, FooterLink } from './Footer.elements'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import Logo from '../Logo/Logo'

const Footer = () => {
   return (
      <FooterContainer>
         <Logo footerLogo={true} />
         <SiteMap>
            <FooterLink to='/'>About</FooterLink>
            <FooterLink to='/'>Services</FooterLink>
            <FooterLink to='/'>Projects</FooterLink>
         </SiteMap>

         <IconContext.Provider value={{ style: { color: 'inherit', width: 'auto', height: '30px' } }}>
            <SiteMap>
               <FooterLink to='/'>
                  <FaFacebookSquare />
               </FooterLink>
               <FooterLink to='/'>
                  <FaInstagram />
               </FooterLink>
               <FooterLink to='/'>
                  <FaTwitter />
               </FooterLink>
               <FooterLink to='/'>
                  <FaPinterest />
               </FooterLink>
            </SiteMap>
         </IconContext.Provider>
      </FooterContainer>
   )
}

export default Footer
