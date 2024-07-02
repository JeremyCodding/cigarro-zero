import { Link } from "react-router-dom";
import Logo from "../Logo";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <Logo />
        </Link>

        <nav className="nav-bar">
          <ul className="nav-list">
            <Link to="/informe-se" className="header-btn">
              <li className="nav-list-item">Informe-se</li>
            </Link>
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
