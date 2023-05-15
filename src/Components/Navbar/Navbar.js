
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";



function Navbar(props) {
  const [showNavbar, setShowNavbar] = useState(false)
 
const handleShowNavbar = () => {
  setShowNavbar(!showNavbar)
}
const [click, setClick] = useState(false);
const [close, setclose] = useState("on");

const handleClick = () => {setClick(!click);
  if(close=="on")
 setclose("off")
 else 
 setclose("on")
}

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar pb-2">
          <div className="navbar-container container pb-5">
            <Link to="/" className="navbar-logo " onClick={scrollToTop}  >
              <GiRocketThruster className="navbar-icon" />
             School
            </Link>
            {/* <h1 className="navbar-logo">  School Logo</h1> */}
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                //   onClick={closeMobileMenu}
                onClick={scrollToTop} >
                  Home
                </NavLink>
 
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
           
                onClick={scrollToTop}  >
                  About us
                </NavLink>
               
              </li> 
              <li className="nav-item">
                <NavLink
                  to="/admission"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                //   onClick={closeMobileMenu}
                onClick={scrollToTop} >
                 Admission
                </NavLink>
 
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                //   onClick={closeMobileMenu}
                onClick={scrollToTop}  >
               Contact Us
                </NavLink>
 
              </li>
              
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
