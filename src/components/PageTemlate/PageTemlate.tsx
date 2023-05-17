import { FC, ReactNode } from "react";
import { Header } from "../Header/Header";
import { Container } from "../Container/Container";
import { Footer } from "../Footer/Footer";
import { useAppContext } from "../AppContext/AppContext";
import "./PageTemlate.scss";

interface IPageTemlate {
  children?: ReactNode;
}

export const PageTemlate: FC<IPageTemlate> = ({ children }) => {
  const { theme, toggleTheme } = useAppContext();
  const handleToggletheme = () => {
    toggleTheme();
  };

  return (
    <section className={`page-template-${theme}`}>
      <Header />
      <Container>{children}</Container>
      <button type="button" onClick={handleToggletheme} style={{ position: "fixed", bottom: "10px", right: "10px" }}>
        toggle {theme}
      </button>
      <Footer />
    </section>
  );
};
