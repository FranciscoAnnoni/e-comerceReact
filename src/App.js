import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Pages from "./pages/Pages"
import Footer from "./common/footer/Footer"
import Products from "./pages/Products"


import Navbar from "./common/header/Navbar"
import ScrollToTop from "./components/scrollToTop"

import Data from "./components/Data"
import Sdata from "./components/shops/Sdata"




import Relojes from "./components/InformacionProductos/Relojes.js"
import RelojesDeMano from "./components/InformacionProductos/RelojesDeMano"
import Lapiceras from "./components/InformacionProductos/Lapiceras"

import Prod from "./components/shops/Prod"

function App() {

  //Productos de cosas randoms:
  const { productItems } = Data

  //Productos de Telefonos :
  const { shopItems } = Sdata

  //Relojes
  const { relojes } = Relojes;

  //Relojes de Mano
  const { relojesDeMano } = RelojesDeMano;

  //Lapicera
    const { lapicera } = Lapiceras;

  return (
    <>
      <Router>
       <Navbar/>
        <Switch>
          <Route path='/' exact>
          <ScrollToTop />
            <Pages shopItems={productItems} /> {/*aca cambie los datos por otros datos del JSON y nos da otra info*/}
          </Route>

          <Route path='/productos' exact>
          <ScrollToTop />
            <Products shopItems={(shopItems)}/>
            {/*<Shoping shopItems={(relojes)}/>*/}
          </Route>

          {/*--------------------------------------*/}
          <Route path='/trabajos' exact>
          <ScrollToTop />
          </Route>

          <Route path='/nosotros' exact>
          <ScrollToTop />
          </Route>

          <Route path='/contacto' exact>
          </Route>  
           {/*--------------------------------------*/}


          {/*Todos los productos de papa*/}
          

          <Route path='/productos-relojesPared' exact>
          <Products shopItems={(relojes)}/>
          </Route>
          
          <Route path='/productos-relojesPared/:id' exact>
          <ScrollToTop />
          <Prod shopItems={(relojes)}/>
          </Route>

          <Route path='/productos-relojesMano' exact>
          <Products shopItems={(relojesDeMano)}/>
          </Route>

          <Route path='/productos-relojesMano/:id' exact>
          <ScrollToTop />
          <Prod shopItems={(relojesDeMano)}/>
          </Route>

          <Route path='/productos-lapiceras' exact>
          <Products shopItems={(lapicera)}/>
          </Route>

          <Route path='/productos-lapiceras/:id' exact>
          <ScrollToTop />
          <Prod shopItems={(lapicera)}/>
          </Route>
          
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
