import "./header.module.css";

function Header() {
  return (
    <header className="header">
      <Logo />
      <nav>
        <ul>
          <li>Informe-se</li>
          <li>Calculadora de saúde</li>
          <li>Encontrar ajuda</li>
          <li>Sobre nós</li>
        </ul>
      </nav>
    </header>
  );
}
