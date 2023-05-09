import { FC, ReactNode } from "react";
import { Header } from "../Header/Header";
import { Container } from "../Container/Container";
import { Footer } from "../Footer/Footer";
import "./PageTemlate.scss";

interface IPageTemlate {
  children?: ReactNode;
}

export const PageTemlate: FC<IPageTemlate> = ({ children }) => {
  return (
    <div className="page-template">
      <Header />
      <Container>
        {children}
        <Footer />
      </Container>
    </div>
  );
};
