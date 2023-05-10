import { FC } from "react";
import "./Pagination.scss";
import { cards } from "../../mock/cards";

export const Pagination: FC = () => {
  return (
    <div className="pagination">
      <span className="pagination__prev">Prev</span>
      <div className="pagination__pages">
        {cards.map((page, i) => {
          return i < 3 && <span className="pagination__page">{i + 1}</span>;
        })}
        {cards.length > 3 && cards.length !== 4 && <span className="pagination__page">...</span>}
        {cards.length > 3 && <span className="pagination__page">{cards.length}</span>}
      </div>
      <span className="pagination__next">Next</span>
    </div>
  );
};
