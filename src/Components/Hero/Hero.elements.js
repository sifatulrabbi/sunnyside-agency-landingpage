import styled from 'styled-components'
import { Container } from '../../GlobalStyles'
import StyleData from '../../Style.data'

export const HeroContainer = styled(Container)`
   position: relative;
   height: auto;
   overflow: hidden;

   ${Container}
`

export const HeroTitle = styled.h1`
   color: white;
   font-weight: ${StyleData.font.weight.black};
   font-family: ${StyleData.font.family.accent};
   font-size: 3rem;
   text-transform: uppercase;
   letter-spacing: 8px;

   position: absolute;
   text-align: center;
   width: 100%;
   top: 30%;
   left: 50%;
   transform: translateX(-50%);

   @media screen and (max-width: 900px) {
      font-size: 2rem;
      width: 100%;
   }
`

export const DownArrow = styled.img`
   z-index: 5;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, 0);
`
