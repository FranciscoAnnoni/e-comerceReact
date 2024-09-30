import React, { useEffect } from "react";
import "./style.css";

const CopyableItem = ({ text, dataCopy }) => (
  <div className="copyable-item" data-copy={dataCopy}>
    {text}
  </div>
);

const Footer = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.copyable-item');

    const copyToClipboard = (item) => {
      const textToCopy = item.getAttribute('data-copy');
      navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Copiado al portapapeles: ' + textToCopy);
      }).catch(err => {
        console.error('Error al copiar: ', err);
      });
    };

    items.forEach(item => {
      item.addEventListener('click', () => copyToClipboard(item));
    });

    return () => {
      items.forEach(item => {
        item.removeEventListener('click', () => copyToClipboard(item));
      });
    };
  }, []);

  return (
    <>
      <footer>
        <div>
          <div className='box'>
            <h2>Informacion de Contacto</h2>
            <div>
              <ul>
                <li className="pointer">
                <CopyableItem text="Buenos Aires - ARGENTINA - Av. del Libertador 186 (1001) - CABA" dataCopy="Buenos Aires - ARGENTINA - Av. del Libertador 186 (1001) - CABA" />
                </li>
                <li className="pointer">
                <CopyableItem text="Email: Ambrogioannoni@gmail.com" dataCopy="Ambrogioannoni@gmail.com" />
 
                </li>
                <li className="pointer">
                <CopyableItem text="Telefono: +54 11 2399-3018" dataCopy="+54 11 2399-3018" />
                </li>

              </ul>
          
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

