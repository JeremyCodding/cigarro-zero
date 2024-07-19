import styles from "./title.module.css";

function TitleSection() {
  return (
    <section className={styles.informe_se}>
      <div className={styles.container}>
        <div>
          <h2>Entenda sobre o Tabagismo</h2>
          <p className={styles.subtitle}>Uma seleção especial de conteúdos</p>
        </div>
      </div>
    </section>
  );
}

export default TitleSection;
