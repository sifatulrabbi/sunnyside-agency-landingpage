import React from 'react'
import { Navbar, Footer } from './Components'
import { Home } from './Pages'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'

export default function App() {
   return (
      <BrowserRouter>
         <GlobalStyles />
         <Navbar />
         <Switch>
            <Route exact to='/' component={Home} />
         </Switch>
         <Footer />
      </BrowserRouter>
   )
}
