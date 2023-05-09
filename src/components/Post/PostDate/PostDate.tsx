import { FC } from "react";
import "./PostDate.scss";

interface IPostDate {
  date: string;
}

export const PostDate: FC<IPostDate> = ({ date }) => {
  return <div className="date">{date}</div>;
};
