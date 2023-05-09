import { FC } from "react";
import "./Footer.scss";

interface IFooter {}

export const Footer: FC<IFooter> = () => {
  return (
    <footer className="footer">
      <span>©2022 Blogfolio</span>
      <span>All rights reserved</span>
    </footer>
  );
};
