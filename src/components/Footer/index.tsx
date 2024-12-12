import LogoWhite from '../../assets/logo-white.svg';
import './footer.css';
function Footer(){
    return(
        <footer>
           <div className="FooterIcons">
                <div className="LogoWhite">
                    <img src={LogoWhite} alt="Logo Cigarro Zero"/>
                </div>
                <nav className="navFooter">
                    <ul className="listFooter">
                        <li><Link to="#">Informe-se</Link></li>
                        <li><Link to="#">Calculadora de saúde</Link></li>
                        <li><Link to="#">Encontrar ajuda</Link></li>
                        <li><Link to="#">Sobre nós</Link></li>
                    </ul>
                </nav>
                <hr className="horizonRule"/>
                <div className="footer-text">
                    <p>Copyright 2024 - Cigarro Zero - Todos os direitos reservados</p>
                    <p>Sua saúde merece um respiro, abrace a vida!</p>
                </div>
           </div>
        </footer>
    )
}

export default Footer;