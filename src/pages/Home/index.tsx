import Layout from "../../components/Layout";
import EntendaTabagismoSection from "./modules/EntendaTabagismo";
import HeroSection from "./modules/Hero";

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <EntendaTabagismoSection />
    </Layout>
  );
}
