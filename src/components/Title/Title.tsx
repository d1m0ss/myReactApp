import { FC } from "react";
import "./Title.scss";

interface ITitle {
  content: string;
  type: "H1" | "H2" | "H3" | "subline" | "primary" | "secondary";
}

export const Title: FC<ITitle> = ({ type, content }) => {
  const titlesMap = {
    H1: <h1 className={`title__${type}`}>{content}</h1>,
    H2: <h1 className={`title__${type}`}>{content}</h1>,
    H3: <h1 className={`title__${type}`}>{content}</h1>,
    subline: <h1 className={`title__${type}`}>{content}</h1>,
    primary: <h1 className={`title__${type}`}>{content}</h1>,
    secondary: <h1 className={`title__${type}`}>{content}</h1>,
  };

  return <>{titlesMap[type]}</>;
};
