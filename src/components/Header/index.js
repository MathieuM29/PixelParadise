import './style.css';
import Menu from './Menu';
import { useState } from "react";


function Header({ isVisible, setIsVisible }) {

  // const handleIsVisible = () => {

  //   setIsVisible(!isVisible);
  // };

  return (
    <header className="header">

      <div className="header__menu">
        <i className="header__menu--icon fa-solid fa-bars"onClick={() => setIsVisible(!isVisible)}></i>
        
        {isVisible && <Menu />}
      </div>

      <div className="header__title">
       <h1 className="header__title--text">PixelParadise</h1>
      </div>
      
      <div className="header__icons">
        <i className="fa-solid fa-circle-user"></i>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

    </header>
  );
}

export default Header;
