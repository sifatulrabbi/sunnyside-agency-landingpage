import styled from 'styled-components'
import StyleData from '../../Style.data'

export const ReviewContainer = styled.section`
   max-width: 100vw;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   padding: 80px 60px;
   color: ${StyleData.colors.blue.dark_gray_blue};
`

export const Title = styled.h2`
   font-family: ${StyleData.font.family.accent};
   text-transform: uppercase;
   letter-spacing: 4px;
   opacity: 0.8;
   font-size: 1.2rem;
   padding: 20px;
   font-weight: ${StyleData.font.weight.black};
`

export const Grid = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-gap: 40px;
   margin: 60px 0;
   line-height: 1.7;

   @media screen and (max-width: 900px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
   }
`

export const Client = styled.div``

export const Dp = styled.img`
   width: 90px;
   height: auto;
   border-radius: 50%;
   margin: 40px 20px 20px 20px;
`

export const Message = styled.p`
   font-size: 0.9rem;
   font-weight: normal;
   color: ${StyleData.colors.blue.de_blue};
   opacity: 0.8;
`

export const Name = styled.h3`
   display: inline-block;
   padding: 40px 20px 10px 20px;
   font-size: 1.2rem;
   font-weight: 900;
   font-family: ${StyleData.font.family.accent};
`

export const ClientTitle = styled.p`
   font-size: 0.7rem;
   font-weight: normal;
   color: ${StyleData.colors.blue.de_blue};
   opacity: 0.7;
`
