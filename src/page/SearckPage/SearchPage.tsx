import { FC } from "react";
import { Typogrphy } from "../../components/Typogrphy/Typogrphy";
import { posts } from "../../mock/posts";
import "./SearchPage.scss";
import { Post } from "../../components/Post/Post";
import { Pagination } from "../../components/Pagination/Pagination";
import { useAppContext } from "../../components/AppContext/AppContext";

export const SearchPage: FC = () => {
  const { searchValue } = useAppContext();
  return (
    <section className="search-page">
      <Typogrphy type="H1" content={`Search results '${searchValue}'`} />
      <section className="search-page__result">
        {posts.map(({ id, date, image, title }) => (
          <Post id={id} date={date} image={image} title={title}  type="small" />
        ))}
      </section>
      <Pagination />
    </section>
  );
};
