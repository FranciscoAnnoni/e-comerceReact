import React, { useState } from "react"
import logo from "../../components/assets/images/logo.svg"
import "./Header.css"
import "./script"
import { Link, NavLink } from "react-router-dom"



const Search = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  const [MobileMenu, setMobileMenu] = useState(false);

  const [btnState, setBtnState] = useState(false);

  function handleClick(){
    setBtnState(btnState => !btnState);
    console.log("aparezco");
    console.log(toggleClassCheck);
  };

  function toggleClassCheck(){
    if(btnState){
      return "active";
    } else return  "noactive";
  };

  console.log(toggleClassCheck());
  return (
    <>
      <section className='search'>
        <div className='containerHeader c_flexHeader'>
          <div className='logo width '>
            <img src={logo} alt='' />
          </div>
     
          <div class='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/'><a className={{toggleClassCheck}} onClick={handleClick}> home <span></span> </a> </Link>
              </li>
              <li>
                <Link to='/Pages' ><a className='active'> home </a></Link>
              </li>
              <li>
                <Link to='/user' ><a>home</a></Link>
              </li>
              <li>
                <Link to='/vendor' ><a>home</a></Link>
              </li>
              <li >
                <Link to='/track' ><a>home</a></Link>
              </li>
              <li >
                <Link to='/contact' ><a>contact</a></Link>
              </li>
            </ul>
            <script scr="script.js"></script>
            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
          <div>
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
    </>
  )
}

export default Search
