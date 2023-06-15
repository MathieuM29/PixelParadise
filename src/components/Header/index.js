import './style.css';
import '../../../src/components/Header/Menu/style.css';
import Menu from './Menu';
import { useState } from "react";


function Header({ isVisible, setIsVisible }) {

  const handleIsVisible = () => {

    console.log(isVisible);
    setIsVisible(!isVisible);
  };

  return (
    <header className="header">

      <div className="header__menu">
        {isVisible && <i className="header i fa-sharp fa-solid fa-xmark" onClick={handleIsVisible}></i>}
        {!isVisible && <i className="header i fa-solid fa-bars"onClick={handleIsVisible}></i>}
        {isVisible && <Menu isVisible={isVisible} />}
      </div>

      <div className="header__title">
       <h1 className="header__title--text"><a href="/" title="Retour accueil">PixelParadise</a></h1>
      </div>
      
      <div className="header__icons">
        <i className="fa-solid fa-circle-user"></i>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

    </header>
  );
}

export default Header;
