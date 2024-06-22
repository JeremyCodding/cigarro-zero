import Logo from "../Logo";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Logo />

        <nav className="nav-bar">
          <ul className="nav-list">
            <li className="nav-list-item">Informe-se</li>
            <li className="nav-list-item">Calculadora de saúde</li>
            <li className="nav-list-item">Encontrar ajuda</li>
            <li className="nav-list-item">Sobre nós</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
