import React, { useState } from 'react'
import { NavContainer, NavMenu, NavItem, NavBtn, Triangle, HamMenu } from './Navbar.elements'
import { LogoName } from '../../GlobalStyles'
import { AiFillCaretLeft, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

const Navbar = () => {
   const [show, setShow] = useState(false)

   const handleHamClick = () => {
      setShow(!show)
   }

   return (
      <NavContainer>
         <LogoName>sunnyside</LogoName>

         <HamMenu onClick={handleHamClick}>
            <IconContext.Provider value={{ style: { width: '30px', height: 'auto', color: 'white' } }}>
               {show ? <AiOutlineClose /> : <AiOutlineMenu />}
            </IconContext.Provider>
         </HamMenu>

         <NavMenu show={show}>
            <NavItem onClick={handleHamClick}>About</NavItem>
            <NavItem onClick={handleHamClick}>Services</NavItem>
            <NavItem onClick={handleHamClick}>Projects</NavItem>
            <NavBtn onClick={handleHamClick}>CONTACT</NavBtn>

            <Triangle>
               <IconContext.Provider value={{ style: { width: 'inherit', height: 'auto', color: 'white' } }}>
                  <AiFillCaretLeft />
               </IconContext.Provider>
            </Triangle>
         </NavMenu>
      </NavContainer>
   )
}

export default Navbar
