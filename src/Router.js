import React from "react"
import "./Router.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Inicio from "./pages/Inicio.jsx"
import Products from "./pages/Products.jsx"
import Footer from "./common/footer/Footer.jsx"



import Navbar from "./common/header/Navbar.js"
import ScrollToTop from "./components/scrollToTop.js"

import ProductosDestacados from "./components/InformacionProductos/ProductosDestacados.js"
import Sdata from "./components/InformacionProductos/Sdata.js"


import Relojes from "./components/InformacionProductos/Relojes.js"
import Paraguas from "./components/InformacionProductos/Paraguas.js"
import RelojesDeMano from "./components/InformacionProductos/RelojesDeMano.js"
import Lapiceras from "./components/InformacionProductos/Lapiceras.js"

import Prod from "./components/shops/Prod.jsx"

function App() {

  //Productos destacados Inicio:
  const { productItems } = ProductosDestacados

  //Productos de Telefonos :
  const { shopItems } = Sdata

  //Relojes
  const { relojes } = Relojes;

  
  //Relojes
  const { paraguas } = Paraguas;

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
            <Inicio shopItems={productItems} /> {/*aca cambie los datos por otros datos del JSON y nos da otra info*/}
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
         
          <Route path='/productos-paraguas' exact>
          <Products shopItems={(paraguas)}/>
          </Route>
          
          <Route path='/productos-paraguas/:id' exact>
          <ScrollToTop />
          <Prod shopItems={(paraguas)}/>
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
