import './style.css';
import { useState } from "react";

function Menu( {isVisible} ) {

  let classNames = "menu";
  
  
  if (!isVisible) {
    // document.body.getElementsByClassName('menu').classList.add('hide');
    classNames += 'hide';
  };

  return (
    <div className='menu'>

     

    </div>
  );
}

export default Menu;
