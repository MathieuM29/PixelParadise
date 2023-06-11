import './style.css';

function Header() {
  return (
    <header className="header">

      <div className="header__menu">
        <i className="header__menu--icon fa-solid fa-bars"></i>
      </div>

      <div className="header__title">
       <h1 className="header__title--text">PixelParadise</h1>
      </div>
      
      <div className="header__icons">
        <i className="fa-solid fa-circle-user"></i>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>

    </header>
  );
}

export default Header;
