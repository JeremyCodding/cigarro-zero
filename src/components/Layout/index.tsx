import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer/index";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="main">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
