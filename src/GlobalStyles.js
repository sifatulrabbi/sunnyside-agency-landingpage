import styled, { createGlobalStyle } from 'styled-components'
import StyleData from './Style.data'

const GlobalStyles = createGlobalStyle`
   * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-size: ${StyleData.font.size.normal};
      font-weight: ${StyleData.font.weight.body};
      font-family: ${StyleData.font.family.body};
   }

   body{
      min-height: 100vh;
      max-width: 100vw;
      
   }

   li, a {
      text-decoration :none;
      list-style-type: none;
      color: inherit;
   }
`

export const Container = styled.section`
   max-width: 100vw;
   width: 100%;
   height: max-content;
   display: flex;
   justify-items: center;
   align-items: center;
`

export const LogoName = styled.h1`
   font-size: 1.8rem;
   font-weight: ${StyleData.font.weight.black};
   font-family: ${StyleData.font.family.accent};
   display: inline-block;
   padding: 10px;
   padding-left: 0;
   margin: 10px;
   margin-left: 0;
   color: ${({ footerLogo }) => (footerLogo ? `${StyleData.colors.cyan.de_cyan}` : 'white')};
   cursor: pointer;
`

export const Button = styled.button`
   background-color: white;
   border: none;
   padding: 15px 20px;
   height: fit-content;
   border-radius: 40px;
   font-family: ${StyleData.font.family.accent};
   font-size: 0.9rem;
   cursor: pointer;
   transition: 200ms ease-in-out;

   &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      color: white;
   }
`

export const Image = styled.img`
   width: 100%;
   height: auto;
`

export default GlobalStyles
