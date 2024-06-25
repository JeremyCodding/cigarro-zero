import Card from "../../../../components/Card/index"; // Certifique-se que o caminho está correto
import "./EntendaTabagismo.css";

function EntendaTabagismo() {
  return (
    <section className="entenda-tabagismo">
      <div className="container">
        <div className="header-content">
          <h2>Entenda sobre o Tabagismo</h2>
          <p className="subtitle">A informação liberta do vício</p>
        </div>
        <div className="card-grid">
          <Card
            title="Entendendo o Tabagismo"
            image=""
            description="O tabagismo é reconhecido como uma doença epidêmica que causa dependência física, psicológica e comportamental."
          />
          <Card
            title="Impacto do Cigarro na Saúde: Doenças e Complicações"
            image=""
            description="O tabagismo causa diversas doenças graves, incluindo problemas respiratórios, cardiovasculares e diferentes tipos de câncer."
          />
          <Card
            title="Benefícios de Parar de Fumar"
            image=""
            description="Quando alguém para de fumar, há uma série de benefícios significativos para a saúde. Confira!"
          />
          <Card
            title="Comparação Entre Métodos de Cessação do Tabagismo"
            image=""
            description="Terapia de reposição de nicotina, medicamentos, acupuntura, hipnose e tratamentos comportamentais. Avalie a eficácia de cada um."
          />
        </div>
        <button className="btn-ver-mais">Ver mais conteúdos</button>
      </div>
    </section>
  );
}

export default EntendaTabagismo;
