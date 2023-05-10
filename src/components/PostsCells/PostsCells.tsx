import { FC } from "react";
import { Post } from "../Post/Post";
import { cards } from "../../mock/cards";
import "./PostsCells.scss";

export const PostsCells: FC = () => {
  const mediumPost = cards.slice(0, 6);
  const smallPost = cards.slice(6);
  return (
    <div className="list">
      <div className="list__primary">
        <div className="list__medium-card">
          {mediumPost.map(({ date, image, title }) => (
            <Post date={date} type="medium" image={image} title={title} linkPath={image} />
          ))}
        </div>
      </div>
      <div className="list__small-cards">
        {smallPost.map(({ date, image, title }) => (
          <Post date={date} type="small" image={image} title={title} linkPath={image} />
        ))}
      </div>
    </div>
  );
};
