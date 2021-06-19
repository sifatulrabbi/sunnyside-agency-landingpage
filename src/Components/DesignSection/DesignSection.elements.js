import styled from 'styled-components'
import { Container, Image } from '../../GlobalStyles'
import StyleData from '../../Style.data'

export const SecContainer = styled.div`
   max-width: 100vw;
   display: grid;
   grid-template-columns: 1fr 1fr;
   height: max-content;
   overflow: none;

   @media screen and (max-width: 1050px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
   }
`

export const Preview = styled(Container)`
   position: relative;
   overflow: hidden;
   width: 100%;
   color: ${({ color_cyan }) => (color_cyan ? `${StyleData.colors.cyan.de_cyan}` : `${StyleData.colors.blue.de_blue}`)};

   ${Container}
`
export const SecImage = styled(Image)`
   ${Image}
`

export const TextContainer = styled.div`
   max-width: 380px;
   width: max-content;
   padding: 20px;
   position: absolute;
   bottom: 0;
   left: 50%;
   transform: translate(-50%, -10%);

   text-align: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   line-height: 1.7;
`

export const SecTitle = styled.h2`
   font-family: ${StyleData.font.family.accent};
   font-weight: ${StyleData.font.weight.black};
   font-size: 1.7rem;
   display: inline-block;
   margin-bottom: 20px;
`

export const SecDesc = styled.p`
   display: inline-block;
   font-weight: ${StyleData.font.weight.body};
`
