import React, { useState } from "react";
import { MenuList } from "./MenuList";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../components/assets/images/empresaria.png";
import "./Header.css";

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  const isActive = (url, subUrls) => {
    // Verificar si la ruta actual coincide con el URL principal
    if (location.pathname === url) {
      return true;
    }

    // Verificar si la ruta actual comienza con alguna de las subrutas
    for (let subUrl of subUrls) {
      if (location.pathname.startsWith(subUrl)) {
        return true;
      }
    }

    return false;
  };

  const menuList = MenuList.map(({ url, title, url1 }, index) => {
    return (
      <li key={index}>
        <NavLink
          exact
          to={url}
          className={isActive(url, url1) ? "active" : ""}
          onClick={() => setMobileMenu(false)} // Cierra el menú al hacer clic en un enlace
        >
          {title}
        </NavLink>
      </li>
    );
  });


  return (
    <section className="search">
      <div className="c_flexHeader">
        <div className="logo">
          <a className="logo-reloj" href="/">
            <img  className="imagenLogo" src={logo} alt="relojEmpresaria"/>
          </a>
          <a className="logo-letra" href="/">
            <label className="logo-letra-empresaria">EMPRESSARIA</label>
          </a>
        </div>

        <div className="navlink">
          <nav>
            {/* Menú responsive: Muestra el menú en móviles si MobileMenu es true */}
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"}>
              {menuList}
            </ul>
          </nav>

          {/* Botón de toggle para abrir/cerrar el menú */}
          <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
            {MobileMenu ? (
              <i className="fas fa-times close home-btn"></i>
            ) : (
              <i className="fas fa-bars open"></i>
            )}
          </button>
        </div>

        {/* Sección de contacto */}
        <div className="Contacto">
          <div className="clickable-link">
            <a className="whatsapp" href="https://wa.me/5491123993018" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-brands fa-whatsapp fa-lg"></i>
              <span className="hide-text">+54 11 2399-3018</span>
            </a>

            <div>
              <a  className="mail"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ambrogioannoni@gmail.com&su=Consulta%20Web"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-envelope"></i>
                <span className="hide-text">Ambrogioannoni@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
