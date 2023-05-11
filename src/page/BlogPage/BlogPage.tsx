import { FC } from "react";
import { Tabs } from "../../components/Tabs/Tabs";
import { Typogrphy } from "../../components/Typogrphy/Typogrphy";
import { Pagination } from "../../components/Pagination/Pagination";
import { PostsCells } from "../../components/PostsCells/PostsCells";
import "./BlogPage.scss";

export const BlogPage: FC = () => {
  return (
    <div className="blog">
      <Typogrphy content="Blog" type="H1" />
      <Tabs />
      <PostsCells />
      <Pagination />
    </div>
  );
};
