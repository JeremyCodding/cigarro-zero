import { Link } from "react-router-dom";
import Logo from "../Logo";
import "./header.css";
import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "shadow-header" : ""}`}>
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
