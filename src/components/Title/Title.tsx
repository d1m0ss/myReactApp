import { FC } from "react";
import "./Title.scss";

interface ITitle {
  content: string;
}

export const Title: FC<ITitle> = ({ content }) => <h1 className="title">{content}</h1>;
