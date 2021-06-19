import styled from 'styled-components'
import { Container } from '../../GlobalStyles'
import StyleData from '../../Style.data'

export const HeroContainer = styled(Container)`
   position: relative;
   height: auto;
   overflow: hidden;

   @media screen and (max-width: 900px) {
   }

   ${Container};
`

export const HeroTitle = styled.h1`
   color: white;
   font-weight: ${StyleData.font.weight.black};
   font-family: ${StyleData.font.family.accent};
   font-size: 3rem;
   text-transform: uppercase;
   letter-spacing: 8px;

   position: absolute;
   width: max-content;
   top: 30%;
   left: 50%;
   transform: translateX(-50%);
`