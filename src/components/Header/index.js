import './style.css';
import tetris from '../../../src/assets/img/logo192.png';

function Header() {
  return (
    <header className="header">
        <h1>Pixel Paradise</h1>
        <img src={tetris} title="" />
    </header>
  );
}

export default Header;
