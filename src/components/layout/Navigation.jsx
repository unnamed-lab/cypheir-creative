import React, { useEffect } from "react";
import "../../styles/css/nav.css";
import logo from "/logo.svg";
import logoWhite from "/logo_white.svg"; 
import Image from "next/image";

function NavigationBar({ setTheme }) {
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
            <SideBar
              showEl={showEl}
              menuToggle={menuToggle}
              logoTheme={logoTheme}
              themeMode={themeMode}
            />
          </div>

          <div className="nav-brand">
            <div className="nav-brand--logo">
              <Image src={logoTheme} alt="Cypheir" />
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

function SideBar({ showEl, menuToggle, themeMode }) {
  const menuContent = [
    {
      title: "Designs",
      icons: (
        <>
          <svg
            height="24"
            version="1.1"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <path d="M17.484 12c0.844 0 1.5-0.656 1.5-1.5s-0.656-1.5-1.5-1.5-1.5 0.656-1.5 1.5 0.656 1.5 1.5 1.5zM14.484 8.016c0.844 0 1.5-0.656 1.5-1.5s-0.656-1.5-1.5-1.5-1.5 0.656-1.5 1.5 0.656 1.5 1.5 1.5zM9.516 8.016c0.844 0 1.5-0.656 1.5-1.5s-0.656-1.5-1.5-1.5-1.5 0.656-1.5 1.5 0.656 1.5 1.5 1.5zM6.516 12c0.844 0 1.5-0.656 1.5-1.5s-0.656-1.5-1.5-1.5-1.5 0.656-1.5 1.5 0.656 1.5 1.5 1.5zM12 3c4.969 0 9 3.609 9 8.016 0 2.766-2.25 4.969-5.016 4.969h-1.734c-0.844 0-1.5 0.656-1.5 1.5 0 0.375 0.141 0.703 0.375 0.984s0.375 0.656 0.375 1.031c0 0.844-0.656 1.5-1.5 1.5-4.969 0-9-4.031-9-9s4.031-9 9-9z" />
          </svg>
        </>
      ),
      url: "#",
    },
    {
      title: "Component",
      icons: (
        <>
          <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3.553 18.895 4 2a1.001 1.001 0 0 0 .894 0L12 19.118l3.553 1.776a.99.99 0 0 0 .894.001l4-2c.339-.17.553-.516.553-.895v-5c0-.379-.214-.725-.553-.895L17 10.382V6c0-.379-.214-.725-.553-.895l-4-2a1 1 0 0 0-.895 0l-4 2C7.214 5.275 7 5.621 7 6v4.382l-3.447 1.724A.998.998 0 0 0 3 13v5c0 .379.214.725.553.895zM8 12.118l2.264 1.132-2.913 1.457-2.264-1.132L8 12.118zm4-2.5 3-1.5v2.264l-3 1.5V9.618zm6.264 3.632-2.882 1.441-2.264-1.132L16 12.118l2.264 1.132zM8 18.882l-.062-.031V16.65L11 15.118v2.264l-3 1.5zm8 0v-2.264l3-1.5v2.264l-3 1.5zM12 5.118l2.264 1.132-2.882 1.441-2.264-1.132L12 5.118z"/></svg>
        </>
      ),
      url: "#",
    },
    {
      title: "Templates",
      icons: (
        <>
          <svg
            id="Lager_1"
            style={{ enableBackground: "new -265 388.9 64 64;" }}
            version="1.1"
            viewBox="-265 388.9 64 64"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M-210.6,411.3h-44.8c-0.9,0-1.6-0.7-1.6-1.6v-9.6c0-0.9,0.7-1.6,1.6-1.6h44.8c0.9,0,1.6,0.7,1.6,1.6v9.6   C-209,410.6-209.7,411.3-210.6,411.3z" />
              <path d="M-236.2,427.3h-19.2c-0.9,0-1.6-0.7-1.6-1.6v-9.6c0-0.9,0.7-1.6,1.6-1.6h19.2c0.9,0,1.6,0.7,1.6,1.6v9.6   C-234.6,426.6-235.3,427.3-236.2,427.3z" />
              <path d="M-210.6,427.3h-19.2c-0.9,0-1.6-0.7-1.6-1.6v-9.6c0-0.9,0.7-1.6,1.6-1.6h19.2c0.9,0,1.6,0.7,1.6,1.6v9.6   C-209,426.6-209.7,427.3-210.6,427.3z" />
              <path d="M-245.8,443.3h-9.6c-0.9,0-1.6-0.7-1.6-1.6v-9.6c0-0.9,0.7-1.6,1.6-1.6h9.6c0.9,0,1.6,0.7,1.6,1.6v9.6   C-244.2,442.6-244.9,443.3-245.8,443.3z" />
              <path d="M-226.6,443.3h-12.8c-0.9,0-1.6-0.7-1.6-1.6v-9.6c0-0.9,0.7-1.6,1.6-1.6h12.8c0.9,0,1.6,0.7,1.6,1.6v9.6   C-225,442.6-225.7,443.3-226.6,443.3z" />
              <path d="M-210.6,443.3h-9.6c-0.9,0-1.6-0.7-1.6-1.6v-9.6c0-0.9,0.7-1.6,1.6-1.6h9.6c0.9,0,1.6,0.7,1.6,1.6v9.6   C-209,442.6-209.7,443.3-210.6,443.3z" />
            </g>
          </svg>
        </>
      ),
      url: "#",
    },
    {
      title: "Contribute",
      icons: (
        <>
          <svg
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.87858 7.5C8.38298 6.88925 9.14603 6.5 10 6.5C10.854 6.5 11.617 6.88925 12.1214 7.5C12.5141 7.97547 12.75 8.58519 12.75 9.25C12.75 10.7453 11.5565 11.9619 10.0702 11.9991C10.0469 11.9997 10.0235 12 10 12C9.97654 12 9.95315 11.9997 9.92983 11.9991C8.44347 11.9619 7.25 10.7453 7.25 9.25C7.25 8.58519 7.48591 7.97547 7.87858 7.5Z" />
            <path d="M13.75 9.25C13.75 8.61795 13.5936 8.02243 13.3175 7.5H17.5C18.3284 7.5 19 8.17157 19 9V9.5C19 11.0874 17.7944 12.7119 15.6851 13.2845C15.258 12.5183 14.4395 12 13.5 12H12.5495C13.2879 11.3151 13.75 10.3365 13.75 9.25Z" />
            <path d="M13.5 13C13.932 13 14.3214 13.1826 14.5951 13.4749C14.8462 13.7431 15 14.1036 15 14.5V15C15 16.9714 13.1405 19 10 19C6.85951 19 5 16.9714 5 15V14.5C5 14.1036 5.15376 13.7431 5.40489 13.4749C5.6786 13.1826 6.06797 13 6.5 13H13.5Z" />
            <path d="M1 9.5C1 11.0874 2.20563 12.7119 4.31486 13.2845C4.742 12.5183 5.56048 12 6.5 12H7.45047C6.71209 11.3151 6.25 10.3365 6.25 9.25C6.25 8.61795 6.40637 8.02243 6.68252 7.5H2.5C1.67157 7.5 1 8.17157 1 9V9.5Z" />
            <path d="M8.75 3.75C8.75 2.23122 7.51878 1 6 1C4.48122 1 3.25 2.23122 3.25 3.75C3.25 5.26878 4.48122 6.5 6 6.5C7.51878 6.5 8.75 5.26878 8.75 3.75Z" />
            <path d="M16.75 3.75C16.75 2.23122 15.5188 1 14 1C12.4812 1 11.25 2.23122 11.25 3.75C11.25 5.26878 12.4812 6.5 14 6.5C15.5188 6.5 16.75 5.26878 16.75 3.75Z" />
          </svg>
        </>
      ),
      url: "#",
    },
    {
      title: "About",
      icons: (
        <>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title />
            <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm-.5,3A1.5,1.5,0,1,1,10,6.5,1.5,1.5,0,0,1,11.5,5ZM14,18H13a2,2,0,0,1-2-2V12a1,1,0,0,1,0-2h1a1,1,0,0,1,1,1v5h1a1,1,0,0,1,0,2Z" />
          </svg>
        </>
      ),
      url: "#",
    },
  ];
  return (
    <>
      <aside>
        <div className={`menu-container ${themeMode} ${showEl}`}>
          <div className="menu-header">
            <div className="company-name">Cypheir</div>
            Creative
          </div>
          <div className="invite-header">
            <a href="#" className="invite-btn">
              Join our community
            </a>
          </div>
          <ul className={`menu-list`}>
            {menuContent.map((el, key) => {
              return (
                <li key={key} className="menu-option">
                  <a key={key} href={el.url} className="nav-link">
                    {el.icons}
                    {el.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="lead-header">
            <a href="#" className="lead-btn"> Follow us on X</a>
          </div>
        </div>

        <div className={`menu-backdrop ${showEl}`} onClick={menuToggle}></div>
      </aside>
    </>
  );
}

export default NavigationBar;
