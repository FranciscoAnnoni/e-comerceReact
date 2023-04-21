
import React, { useRef, useState, useEffect } from "react"
import "./Prod.css"
import { useParams } from "react-router-dom"
import ShopCart from "./ShopCart"


const Prod = ({ shopItems }) => {
  const idValue = useParams().id
  const object = shopItems.find(({ id }) => id == idValue)

  // Usamos refs para acceder a los elementos del DOM
  const imgContainerRef = useRef(null)
  const hoverContainerRef = useRef(null)
  const hoverImagesRefs = useRef([])

  // Usamos estado para mantener un seguimiento de la imagen actual que se muestra
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  // Al cargar el componente, configuramos la imagen inicial y agregamos eventos
  useEffect(() => {
    // Agregamos la clase 'active' a la primera imagen del hover
    hoverImagesRefs.current[0].parentElement.classList.add('active')
    // Mostramos la primera imagen en el contenedor principal
    imgContainerRef.current.src = hoverImagesRefs.current[0].src

    // Agregamos eventos de mouseover a las imágenes del hover
    hoverImagesRefs.current.forEach((image, index) => {
      image.addEventListener('mouseover', () => {
        imgContainerRef.current.src = image.src
        setCurrentImgIndex(index)
        resetActiveImg()
        image.parentElement.classList.add('active')
      })
    })

    // Removemos eventos y clases activas en el componente de cleanup
    return () => {
      hoverImagesRefs.current.forEach((image) => {
        image.removeEventListener('mouseover', () => {})
        image.parentElement.classList.remove('active')
      })
    }
  }, [])

  // Función auxiliar para remover la clase 'active' de todas las imágenes del hover
  function resetActiveImg() {
    hoverImagesRefs.current.forEach((img) => {
      img.parentElement.classList.remove('active')
    })
  }

  function getRelatedItems(items, currentItemId) {
    const currentIdx = items.findIndex(item => item.id === currentItemId);
    const relatedItems = [];
  
    for (let i = currentIdx + 1; i <= currentIdx + 3; i++) {
      const itemIdx = i % items.length;
      relatedItems.push(items[itemIdx]);
    }
  
    return relatedItems;
  }

  const itemsRecomendados = getRelatedItems(shopItems , object.id);

   console.log(itemsRecomendados);

  // Renderizamos el componente
  return (
    <>
      <div className="main-wrapper">
        <div className="container">
          <div className="product-div">
            <div className="product-div-left">
              <div className="img-container">
                <img src={"." + object.cover} alt="" ref={imgContainerRef} />
              </div>
              <div className="hover-container" ref={hoverContainerRef}>
                <div><img src={"." + object.cover} ref={el => hoverImagesRefs.current[0] = el} /></div>
                <div><img src={"." + object.cover1} ref={el => hoverImagesRefs.current[1] = el} /></div>
                <div><img src={"." + object.cover2} ref={el => hoverImagesRefs.current[2] = el} /></div>
              </div>
            </div>
            <div className="product-div-right">
              <span className="product-name">{object.name}</span>
              <span className="product-price">${object.price}.00</span>
              <div className="product-rating">
                <span><i class="fa fa-star"></i></span>
          <span><i class="fa fa-star"></i></span>
          <span><i class="fa fa-star"></i></span>
          <span><i class="fa fa-star"></i></span>
          <span><i class="fa fa-star"></i></span>
           </div>
           <p class="product-description">{object.description}</p>
          <div class="btn-groups">
          <button type="button" class="buy-now-btn"><i class="fa fa-wallet"></i>  Estoy interesado</button>
           </div>
         </div>

         
       </div>
       <div className="product-div2">
    <div className="img-container2">
    <div className='product-content2  grid1'>
    <ShopCart shopItems={itemsRecomendados} />
     </div>
     </div>
     </div>
     </div>
    </div>

    </>
  )
}

export default Prod
