import { ReactNode } from "react";
import Header from "../Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="main">
      <Header />
      {children}
      <footer>Aqui fica o footer</footer>
    </main>
  );
}
