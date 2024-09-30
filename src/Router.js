import React, { Suspense, lazy } from 'react';

import "./Router.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Loading from "./components/Loading/Loading.jsx";

import Footer from "./common/footer/Footer.jsx"



import Navbar from "./common/header/Navbar.js"
import ScrollToTop from "./components/scrollToTop.js"

import ProductosDestacados from "./components/InformacionProductos/ProductosDestacados.js"


import Relojes from "./components/InformacionProductos/Relojes.js"
import Paraguas from "./components/InformacionProductos/Paraguas.js"
import RelojesDeMano from "./components/InformacionProductos/RelojesDeMano.js"
import Lapiceras from "./components/InformacionProductos/Lapiceras.js"
import Mochilas from "./components/InformacionProductos/Mochilas.js"
import Otros from "./components/InformacionProductos/Otros.js"

import Prod from "./components/shops/Prod.jsx"

import Products from './pages/Products.jsx'
import Inicio from './pages/Inicio.jsx'

//const Products = lazy(() => import("./pages/Products.jsx"));
//const Inicio = lazy(() => import('./pages/Inicio.jsx'));


function App() {

  //Productos destacados Inicio:
  const { productItems } = ProductosDestacados


  //Relojes
  const { relojes } = Relojes;

  
  //Relojes
  const { paraguas } = Paraguas;

  //Relojes de Mano
  const { relojesDeMano } = RelojesDeMano;

  //Lapicera
    const { lapicera } = Lapiceras;

  //Mochilas
  const { mochilas } = Mochilas;

  const {otros} = Otros;

  return (
    <>
      <Router>
       <Navbar/>
        <Switch>
          <Route path='/' exact>
          <ScrollToTop />
          <Suspense fallback={<Loading />}>
            <Inicio shopItems={productItems} /> {/*aca cambie los datos por otros datos del JSON y nos da otra info*/}
          </Suspense>
          </Route>

          
          <Route path='/productos-relojesPared' exact>
          <ScrollToTop />
          <Suspense fallback={<Loading />}>
            <Products shopItems={(relojes)}/>
            {/*<Shoping shopItems={(relojes)}/>*/}
          </Suspense>
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
   
          <Products shopItems={(relojes)}/>\
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
          
          
          <Route path='/productos-mochilas' exact>
          <Products shopItems={(mochilas)}/>
          </Route>

          <Route path='/productos-mochilas/:id' exact>
          <ScrollToTop />
          <Prod shopItems={(mochilas)}/>
          </Route>

          <Route path='/productos-otros' exact>
          <Products shopItems={(otros)}/>
          </Route>

          <Route path='/productos-otros/:id' exact>
          <ScrollToTop />
          <Prod shopItems={(otros)}/>
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
