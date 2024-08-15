import React, { useState } from "react"
import { MenuList} from "./MenuList";
import { NavLink, useLocation } from 'react-router-dom';
import logo from "../../components/assets/images/empresaria.png"
import "./Header.css"

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
                  className={isActive(url, url1) ? 'active' : ''}
              >
                  {title}
              </NavLink>
          </li>
      );
  });

    return (

        <section className='search'>
        <div className='c_flexHeader'>
          <div className='logo width '>
            <a  href="/"><img src={logo} alt='' width="80" height="80" /></a>
            <a className="logo-letra"  href="/">EMPRESSARIA</a>
          </div>
          
          <div className='navlink'>
            <nav>
                <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}> {menuList}</ul>
             </nav>
            
            <script scr="script.js"></script>
            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>


          </div>
          <div className="contacto">

           <div>
            <i className='fa fa-phone'></i>
            <label> +88012 3456 7894</label>
            </div>

            <div>
            <i className='fa fa-envelope'></i>
            <label>  support@ui-lib.com</label>
            </div>
          </div>
        </div>
      </section>
    );

};

export default Navbar;