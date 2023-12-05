import React, { useEffect } from "react";
import logo from "/logo.svg";
import logoWhite from "/logo_white.svg";
import "../../styles/css/nav.css";

function NavigationBar({setTheme}) {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  // Theme is set to light mode when set to false
  const [isToggle, setToggle] = React.useState(false);
  const themeMode = isDarkMode ? "dark" : "";
  const logoTheme = !isDarkMode ? logo : logoWhite;
  const showEl = isToggle ? "show" : "";
  setTheme(isDarkMode);

  function menuToggle() {
    setToggle(!isToggle);
  }

  function themeToggle(event) {
    event.target.checked === true ? setIsDarkMode(true) : setIsDarkMode(false);
  }

  useEffect(() => {
    const isUsingDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(isUsingDarkMode);

    const darkModeListener = (event) => {
      setIsDarkMode(event.matches);
    };

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkModeMediaQuery.addEventListener("change", darkModeListener);


    return () => {
      darkModeMediaQuery.removeEventListener("change", darkModeListener);
    };
  }, []);

  return (
    <>
      <header>
        <nav className={`navbar ${themeMode}`}>
          <div className="nav-menu">
            <div className="menu-toggle" onClick={menuToggle}>
              <svg
                fill={themeMode ? "#f8f9fa" : "#212121"}
                style={{ enableBackground: "new 0 0 24 24;" }}
                version="1.1"
                viewBox="0 0 24 24"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g id="info" />
                <g id="icons">
                  <g id="menu">
                    <path d="M20,10H4c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2C22,10.9,21.1,10,20,10z" />
                    <path d="M4,8h12c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6C2,7.1,2.9,8,4,8z" />
                    <path d="M16,16H4c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2C18,16.9,17.1,16,16,16z" />
                  </g>
                </g>
              </svg>
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

          <div className="nav-brand">
            <div className="nav-brand--logo">
              <img src={logoTheme} alt="Cypheir" />
            </div>
          </div>

          <div className="nav-theme-setting">
            <label className={`theme-btn ${themeMode}`} htmlFor="themeBtn">
              <input
                type="checkbox"
                name="theme"
                id="themeBtn"
                onChange={themeToggle}
                checked={isDarkMode}
              />
              <div className="theme-btn--effect">
                <div className="theme-icon"></div>
              </div>
            </label>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavigationBar;