import { FC } from "react";
import "./Title.scss";

interface ITitle {
  content: string;
  type: "H1" | "H2" | "H3" | "subline" | "primary" | "secondary";
  isLink?: boolean;
  linkPath?: string;
}

export const Title: FC<ITitle> = ({ type, content, isLink = false, linkPath = "" }) => {
  const titlesMap = {
    H1: <h1 className={`title__${type}`}>{content}</h1>,
    H2: <h2 className={`title__${type}`}>{content}</h2>,
    H3: <h3 className={`title__${type}`}>{content}</h3>,
    subline: <h4 className={`title__${type}`}>{content}</h4>,
    primary: <p className={`title__${type}`}>{content}</p>,
    secondary: <p className={`title__${type}`}>{content}</p>,
  };

  return (
    <>
      {isLink ? (
        <a className="link" href={linkPath}>
          {titlesMap[type]}
        </a>
      ) : (
        <>{titlesMap[type]}</>
      )}
    </>
  );
};
