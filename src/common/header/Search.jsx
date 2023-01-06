import React, { useState } from "react"
import logo from "../../components/assets/images/empresaria.png"
import "./Header.css"
import { Link } from "react-router-dom"



const Search = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  const [MobileMenu, setMobileMenu] = useState(false);

  const [btnState, setBtnState] = useState(true);
  const [btnState2, setBtnState2] = useState(false);
  const [btnState3, setBtnState3] = useState(false);
  const [btnState4, setBtnState4] = useState(false);
  const [btnState5, setBtnState5] = useState(false);

/*
  function final(){
    if(window.user == 'inicio' ){

        setBtnState(true);
        setBtnState2(false);
        setBtnState3(false);
        setBtnState4(false);
        setBtnState5(false);
      
    }else if (window.user == 'Pages'){
        setBtnState(false);
        setBtnState2(true);
        setBtnState3(false);
        setBtnState4(false);
        setBtnState5(false);
    
    }

  }
*/

  function handleClick(){
    setBtnState(true);
    setBtnState2(false);
    setBtnState3(false);
    setBtnState4(false);
    setBtnState5(false);
  };

  function handleClick2(){
    setBtnState(false);
    setBtnState2(true);
    setBtnState3(false);
    setBtnState4(false);
    setBtnState5(false);

  };
  function handleClick3(){
    setBtnState(false);
    setBtnState2(false);
    setBtnState3(true);
    setBtnState4(false);
    setBtnState5(false);


  };
  function handleClick4(){
    setBtnState(false);
    setBtnState2(false);
    setBtnState3(false);
    setBtnState4(true);
    setBtnState5(false);


  };
  function handleClick5(){
    setBtnState(false);
    setBtnState2(false);
    setBtnState3(false);
    setBtnState4(false);
    setBtnState5(true);
  };

  function prueva(btnState2){
    if(btnState2){
      return "active";
    } else {
      return "inactive";
    } 
  }
  function prueva2(){
    if(window.pages){
      return "active";
    } else {
      return "inactive";
    } 
  }

  return (
    <>
      <section className='search'>
        <div className='containerHeader c_flexHeader'>
          <div className='logo width '>
            <a  href="/"><img src={logo} alt='' width="80" height="80" /></a>
            <a className="logo-letra"  href="/">EMPRESSARIA</a>
          </div>
          
          <div class='navlink'>
            
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/'><a className={btnState ? "active" : "inactive"} onClick={handleClick}> Inicio </a> </Link>
              </li>
              <li>
                <Link to='/Pages' ><a className={btnState2 ? "active" : "inactive"} onClick={handleClick2}> Productos </a></Link>
              </li>
              <li>
                <Link to='/user' ><a className={btnState3 ? "active" : "inactive"} onClick={handleClick3}>Trabajos Realizados</a></Link>
              </li>
              <li>
                <Link to='/vendor' ><a className={btnState4 ? "active" : "inactive"} onClick={handleClick4}>Sobre nosotros</a></Link>
              </li>
              <li >
                <Link to='/contact' ><a className={btnState5 ? "active" : "inactive"} onClick={handleClick5}>Contacto</a></Link>
              </li>
            </ul>
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
    </>
  )
}

export default Search
