import heroImage from "../../../../assets/hero-image.svg";

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="container">
        <div className="text-section">
          <p>comece uma vida</p>
          <p>saudável e sem cigarro</p>
          <p>
            Nossa missão é fornecer informações valiosas e recursos de apoio
            para todos que desejam parar de fumar.{" "}
          </p>
          <p>
            Navegue pelo nosso site e encontre tudo que você precisa para
            começar sua jornada livre do cigarro!
          </p>
        </div>
        <div className="image-section">
          <img src={heroImage} alt="Foto depoimentos" />
        </div>
      </div>
    </div>
  );
}
