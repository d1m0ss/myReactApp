import { FC } from "react";
import { Tabs } from "../../components/Tabs/Tabs";
import { Title } from "../../components/Title/Title";
import { Pagination } from "../../components/Pagination/Pagination";
import { PostsCells } from "../../components/PostsCells/PostsCells";
import "./Blog.scss";

export const Blog: FC = () => {
  return (
    <div className="Blog">
      <Title content="Blog" type="H1" />
      <Tabs />
      <PostsCells />
      <Pagination />
    </div>
  );
};
