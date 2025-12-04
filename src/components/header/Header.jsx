import './Header.css';

function Header() {
  return (
    <header className="header">
        <div className="header__logo">
        <img src="/cs2pngg.png" 
        className="header__logo-img" />
        </div>
      <div className="header__logo"></div>
        <nav className="header__nav">
          <a href="#updates" 
          className="header__link">Updates</a>
          <a href="#skins" 
          className="header__link">Skins</a>
          <a href="#esports" 
          className="header__link">Esports</a>
        </nav>
      <button className="header__button">Sign In</button>
    </header>
  );
}

export default Header;