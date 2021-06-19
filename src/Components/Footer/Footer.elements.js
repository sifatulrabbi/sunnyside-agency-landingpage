import styled from 'styled-components'
import StyleData from '../../Style.data'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
   background-color: ${StyleData.colors.cyan.mod_cyan};
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding-top: 3rem;
`

export const SiteMap = styled.nav`
   margin-bottom: 50px;
   margin-top: 20px;
   display: flex;
   justify-content: space-around;
   align-items: center;
`

export const FooterLink = styled(Link)`
   padding: 5px;
   margin: 10px;
   color: ${StyleData.colors.cyan.de_cyan};
   transition: 200ms ease-in-out;

   &:hover {
      color: white;
   }
`
