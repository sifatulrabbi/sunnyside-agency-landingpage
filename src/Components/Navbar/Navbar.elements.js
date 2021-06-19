import styled from 'styled-components'
import StyleData from '../../Style.data'
import { Button } from '../../GlobalStyles'

export const NavContainer = styled.div`
   position: relative;
   display: flex;
   max-width: 100vw;
   width: 100%;
   padding: 0 40px;
   justify-content: space-between;
   align-items: center;
   height: 100px;

   position: absolute;
   z-index: 10;
   top: 0;
   left: 0;

   @media screen and (max-width: 900px) {
      padding: 0 20px;
   }
`

export const NavMenu = styled.ul`
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;

   @media screen and (max-width: 900px) {
      flex-direction: column;
      position: absolute;
      top: 100px;
      left: 20px;
      right: 20px;
      padding: 30px;
      background-color: white;
      color: ${StyleData.colors.blue.de_blue};
      transition: 300ms ease-in-out;
      transform-origin: top;
      transform: ${({ show }) => (show ? 'scaleY(1)' : 'scaleY(0)')};
   }
`

export const NavItem = styled.li`
   padding: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   transition: 200ms ease-in-out;

   &:hover {
      transform: translateY(-2px);
   }
`

export const NavBtn = styled(Button)`
   margin: 20px;

   @media screen and (max-width: 900px) {
      background-color: ${StyleData.colors.yellow};
   }

   &:hover {
      background-color: rgba(0, 0, 0, 0.2);
   }

   ${Button}
`

export const Triangle = styled.div`
   display: none;

   @media screen and (max-width: 900px) {
      display: block;
      z-index: -1;
      height: 58.2px;
      width: 58.2px;
      padding: 0;
      fill: white;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(17.05px, -50%);
   }
`

export const HamMenu = styled.div`
   display: none;

   @media screen and (max-width: 900px) {
      display: block;
      position: absolute;
      top: 35px;
      right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
   }
`
