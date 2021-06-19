import styled from 'styled-components'

export const NavContainer = styled.div`
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
`

export const NavMenu = styled.ul`
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
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
