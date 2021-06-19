import React from 'react'
import { NavContainer, NavMenu, NavItem } from './Navbar.elements'
import { LogoName, Button } from '../../GlobalStyles'

function Navbar() {
   return (
      <NavContainer>
         <LogoName>sunnyside</LogoName>

         <NavMenu>
            <NavItem>About</NavItem>
            <NavItem>Services</NavItem>
            <NavItem>Projects</NavItem>
            <Button>CONTACT</Button>
         </NavMenu>
      </NavContainer>
   )
}

export default Navbar
