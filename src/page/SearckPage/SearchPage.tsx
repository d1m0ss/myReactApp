import { FC } from "react";
import { Typogrphy } from "../../components/Typogrphy/Typogrphy";
import { posts } from "../../mock/posts";
import "./SearchPage.scss";
import { Post } from "../../components/Post/Post";
import { Pagination } from "../../components/Pagination/Pagination";

interface ISearchPage {
  search: string;
}

export const SearchPage: FC<ISearchPage> = ({ search }) => {
  return (
    <section className="search-page">
      <Typogrphy type="H1" content={`Search results '${search}'`} />
      <section className="search-page__result">
        {posts.map(({ date, image, title }) => (
          <Post date={date} image={image} title={title} type="small" />
        ))}
      </section>
      <Pagination />
    </section>
  );
};
