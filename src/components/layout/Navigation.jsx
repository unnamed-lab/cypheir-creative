import React from 'react'
import logo from "/logo.svg";
import "../../styles/css/nav.css";

function NavigationBar() {
    const [ isToggle, setToggle ] = React.useState(false);
    let showEl = isToggle ? "show" : "";

    function menuToggle() {setToggle(!isToggle);}
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="nav-brand">
            <div className="nav-brand--logo">
              <img src={logo} alt="Cypheir" />
            </div>
          </div>
          <div className="nav-menu">
            <div className="menu-toggle" onClick={menuToggle}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul className={`menu-list ${showEl}`}>
              <li className="menu-option">
                <a href="#" className="nav-link">
                  Designs
                </a>
              </li>
              <li className="menu-option">
                <a href="#" className="nav-link">
                  Components
                </a>
              </li>
              <li className="menu-option">
                <a href="#" className="nav-link">
                  Templates
                </a>
              </li>
            </ul>
            <div
              className={`menu-backdrop ${showEl}`}
              onClick={menuToggle}
            ></div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavigationBar;
