import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Search from "./common/header/Search"
import Pages from "./pages/Pages"
import Footer from "./common/footer/Footer"
import Products from "./pages/Products"


import Data from "./components/Data"
import Sdata from "./components/shops/Sdata"



function App() {

  //Productos de cosas randoms:
  const { productItems } = Data

  //Productos de Telefonos :
  const { shopItems } = Sdata


  return (
    <>
      <Router>
       <Search/>
        <Switch>
          <Route path='/' exact>
            <Pages shopItems={productItems} /> {/*aca cambie los datos por otros datos del JSON y nos da otra info*/}
          </Route>
          <Route path='/Pages' exact>
            <Products shopItems={(shopItems)}/>
          </Route>
          <Route path='/user' exact>
            <Pages shopItems={shopItems}/>
          </Route>
          <Route path='/vendor' exact>
            <Pages shopItems={shopItems} />
          </Route>
          <Route path='/track' exact>
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
