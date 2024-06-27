import Carousel from "../../components/Carousel";
import Layout from "../../components/Layout";
import TitleSection from "./modules/TitleSection/index";
import CardSection from "./modules/CardSection";

export default function InformeSe() {
  return (
    <Layout>
      <TitleSection />
      <Carousel />
      <CardSection />
    </Layout>
  );
}
