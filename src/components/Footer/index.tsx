import { Link } from "react-router-dom";
import "./footer.css";
import LogoWhite from "../../assets/logo-white.svg";
function Footer() {
  return (
    <footer>
      <div className="FooterIcons">
        <Link to="/">
          <div className="LogoWhite">
            <img src={LogoWhite} alt="Logo Cigarro Zero" />
          </div>
        </Link>
        <nav className="navFooter">
          <ul className="listFooter">
            <li>
              <Link to="#">Informe-se</Link>
            </li>
            <li>
              <Link to="#">Calculadora de saúde</Link>
            </li>
            <li>
              <Link to="#">Encontrar ajuda</Link>
            </li>
            <li>
              <Link to="#">Sobre nós</Link>
            </li>
          </ul>
        </nav>
        <hr className="horizonRule" />
        <div className="footer-text">
          <div className="footer-text-left">
            <p>Copyright 2024 - Cigarro Zero - Todos os direitos reservados</p>
          </div>
          <div className="footer-text-right">
            <p>Sua saúde merece um respiro, abrace a vida!</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
