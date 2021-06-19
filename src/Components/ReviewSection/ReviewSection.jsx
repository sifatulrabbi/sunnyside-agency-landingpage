import React from 'react'
import { ReviewContainer, Client, Dp, Message, Name, ClientTitle, Grid, Title } from './ReviewSection.elements'

const ReviewSection = ({ clients_data }) => {
   return (
      <ReviewContainer>
         <Title>clients testimonials</Title>
         <Grid>
            {clients_data.map((client) => (
               <Client key={client.id}>
                  <Dp src={client.image} />
                  <Message>{client.message}</Message>
                  <Name>{client.name}</Name>
                  <ClientTitle>{client.title}</ClientTitle>
               </Client>
            ))}
         </Grid>
      </ReviewContainer>
   )
}

export default ReviewSection
