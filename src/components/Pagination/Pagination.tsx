import { FC } from "react";
import "./Pagination.scss";
import { posts } from "../../mock/posts";

export const Pagination: FC = () => {
  return (
    <div className="pagination">
      <span className="pagination__prev">Prev</span>
      <div className="pagination__pages">
        {posts.map((page, i) => {
          return i < 3 && <span className="pagination__page">{i + 1}</span>;
        })}
        {posts.length > 3 && posts.length !== 4 && <span className="pagination__page">...</span>}
        {posts.length > 3 && <span className="pagination__page">{posts.length}</span>}
      </div>
      <span className="pagination__next">Next</span>
    </div>
  );
};
