import React, { useRef, useState, useEffect } from "react";
import "./Prod.css";
import { useParams } from "react-router-dom";
import ShopCart from "./ProductoIndividual";
import { Link } from "react-router-dom";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const Prod = ({ shopItems }) => {
  const idValue = useParams().id;
  const object = shopItems.find(({ id }) => id == idValue);

  // Usamos refs para acceder a los elementos del DOM
  const imgContainerRef = useRef(null);
  const hoverContainerRef = useRef(null);
  const hoverImagesRefs = useRef([]);

  // Usamos estado para mantener un seguimiento de la imagen actual que se muestra
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
// Función para manejar el mouseover
const handleMouseOver = (image, index) => {
  imgContainerRef.current.src = image.src;
  setCurrentImgIndex(index);
  resetActiveImg();
  image.parentElement.classList.add('active');
};

useEffect(() => {
  // Verificamos que hoverImagesRefs.current no sea null o undefined
  if (hoverImagesRefs.current.length > 0) {
    // Agregamos la clase 'active' a la primera imagen del hover
    hoverImagesRefs.current[0].parentElement.classList.add('active');
    // Mostramos la primera imagen en el contenedor principal
    imgContainerRef.current.src = hoverImagesRefs.current[0].src;

    // Agregamos eventos de mouseover a las imágenes del hover
    hoverImagesRefs.current.forEach((image, index) => {
      const onMouseOver = () => handleMouseOver(image, index);
      image.addEventListener('mouseover', onMouseOver);

      // Guardamos la referencia a la función para eliminarla correctamente en el cleanup
      image._onMouseOver = onMouseOver;
    });
  }

  // Removemos eventos y clases activas en el cleanup
  return () => {
    hoverImagesRefs.current.forEach((image) => {
      if (image && image._onMouseOver) {
        image.removeEventListener('mouseover', image._onMouseOver);
        image.parentElement.classList.remove('active');
      }
    });
  };
}, []);

  // Función auxiliar para remover la clase 'active' de todas las imágenes del hover
  function resetActiveImg() {
    hoverImagesRefs.current.forEach((img) => {
      img.parentElement.classList.remove('active');
    });
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

  const itemsRecomendados = getRelatedItems(shopItems, object.id);
  
  // Obtener el path actual
  const location = window.location.pathname;

  // Extraer el path original eliminando la última parte después del último '/'
  const originalPath = location.split('/').slice(0, -1).join('/');



  // Funciones para enviar correo y mensaje
  const handleEmail = () => {
    const subject = encodeURIComponent(object.price); // Asunto del email
    const body = encodeURIComponent(`Consulta sobre el producto: ${object.nombre}, con el codigo de Producto: ${object.price}`); // Cuerpo del email
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=ambrogioannoni@gmail.com&su=${subject}&body=${body}`, '_blank');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola, estoy interesado en el producto: ${object.name}, con el codigo de Producto: ${object.price}`);
    window.open(`https://wa.me/5491123993018?text=${message}`, '_blank');
  };

  // Renderizamos el componente
  return (
    <section className='background'>
      <div className="main-wrapper">
        <div className="container">
          <Link to={originalPath}>
            <button className="botonVolver"><i className="fa fa-arrow-left"></i><span className="hide-text-prod">Volver</span></button>
          </Link>
          <div className="product-div">
            <div className="product-div-left">
              <div className="img-container">
                <img src={"." + object.cover} alt="" ref={imgContainerRef} />
              </div>
              <div className="hover-container" ref={hoverContainerRef}>
                <div><img alt='' src={"." + object.cover} ref={el => hoverImagesRefs.current[0] = el} /></div>
                <div><img alt='' src={"." + object.cover1} ref={el => hoverImagesRefs.current[1] = el} /></div>
                <div><img alt='' src={"." + object.cover2} ref={el => hoverImagesRefs.current[2] = el} /></div>
              </div>
            </div>
            <div className="product-div-right">
              <span className="product-name">{object.name}</span>
              <span className="product-price">Código de Producto: {object.price}</span>
              <div className="product-rating">
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
              </div>
              <p className="product-description">{object.description}</p>

              <div className="btn-groups">
                {/* <button onClick={handleEmail} type="button" className="buy-now-btn">
                  <i className="fa fa-envelope"></i> Enviar mail
                </button> */}
                
                
                <button onClick={handleWhatsApp} type="button" className="buy-now-btn">
                <i className="fa-brands fa-whatsapp  fa-lg"></i>  Enviar Mensaje
                </button>

              </div>
            </div>
          </div>
          <div className="product-div2">
            <div className="img-container2">
              <div className='product-content2 grid1'>
                <ShopCart shopItems={itemsRecomendados} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prod;

