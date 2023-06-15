import './_style.scss';
import { useState } from "react";

function Menu( {isVisible} ) {

  // let classNames = "menu";
  
  
  // if (!isVisible) {
  // document.body.getElementsByClassName('menu').classList.add('hide');
  //   classNames += 'hide';
  // };

  return (
    <div className='menu'>
      <nav className="menu__container">
        
        <div className="menu__container--item">
          <i class="fa-solid fa-house"></i>
          <a className="menu__container--item" href="/" title="Page d'accueil">Accueil</a>
        </div>
        
        <div className="menu__container--item">
          <i class="fa-solid fa-microchip"></i>
          <a className="menu__container--item" href="/" title="Page d'accueil">Composants</a>
        </div>
        
        <div className="menu__container--item">
          <i class="fa-solid fa-info"></i>
          <a className="menu__container--item" href="/" title="Page d'accueil">Aide / Faq</a>
        </div>
        
        <div className="menu__container--item">
          <i class="fa-solid fa-address-card"></i>
          <a className="menu__container--item" href="/" title="Page d'accueil">A propos</a>
        </div>
        
        <div className="menu__container--item">
          <i class="fa-solid fa-envelope"></i>
          <a className="menu__container--item" href="/" title="Page d'accueil">Contact</a>
        </div>  
      </nav>
    </div>
  );
}

export default Menu;
