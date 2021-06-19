import React from 'react'
import { Navbar, Hero } from './Components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'

export default function App() {
   return (
      <BrowserRouter>
         <GlobalStyles />
         <Navbar />
         <Hero />
         <Switch>
            <Route exact to='/' />
         </Switch>
      </BrowserRouter>
   )
}
