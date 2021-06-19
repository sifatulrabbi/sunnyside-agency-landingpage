import React from 'react'
import styled from 'styled-components'
import StyleData from '../../Style.data'

export const LogoName = styled.h1`
   font-size: 1.8rem;
   font-weight: ${StyleData.font.weight.black};
   font-family: ${StyleData.font.family.accent};
   display: inline-block;
   padding: 10px;
   margin-left: 0;
   color: ${({ footerLogo }) => (footerLogo ? `${StyleData.colors.cyan.de_cyan}` : 'white')};
   cursor: pointer;
`
const Logo = ({ footerLogo }) => {
   return <LogoName footerLogo={footerLogo}>sunnyside</LogoName>
}

export default Logo
