import styled from 'styled-components'
import { Container, Button } from '../../GlobalStyles'
import StyleData from '../../Style.data'

export const SecContainer = styled(Container)`
   display: grid;
   grid: 'colA colB';
   grid-template-columns: 1fr 1fr;
   height: max-content;
   overflow: none;

   @media screen and (max-width: 1050px) {
      grid: ${({ reverse }) => (reverse ? "'colA''colB'" : "'colB''colA'")};
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
   }

   ${Container}
`

export const TextContainer = styled.div`
   padding: 50px;
   text-align: start;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   line-height: 1.7;
`

export const Title = styled.h2`
   display: inline-block;
   font-family: ${StyleData.font.family.accent};
   font-size: 2rem;
   padding: 20px;
`

export const Desc = styled.p`
   display: inline-block;
   padding: 20px;
   color: ${StyleData.colors.blue.dark_gray_blue};
`

export const Btn = styled(Button)`
   position: relative;
   z-index: 1;
   background-color: transparent;
   padding: 5px;
   margin: 15px;
   color: black;

   &::before {
      content: '';
      z-index: -1;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 8px;
      border: none;
      border-radius: 5px;
      opacity: 0.3;
      background-color: ${({ color_red }) => (color_red ? `${StyleData.colors.red}` : `${StyleData.colors.yellow}`)};
      transform: translateY(-40%);
      transition: 200ms ease-in-out;
   }

   &:hover {
      color: inherit;
   }

   &:hover::before {
      opacity: 1;
   }
`

export const ImgWrapper = styled.div`
   width: 100%;
   height: 100%;

   grid-area: ${({ reverse }) => (reverse ? 'colA' : 'colB')};
`

export const SecImage = styled.img`
   width: inherit;
   height: inherit;
`
