import { FC } from "react";
import { Post } from "../Post/Post";
import { cards } from "../../mock/cards";
import { IPost } from "../../interfaces/IPost";
import "./PostsList.scss";

interface IPostsList {
  cards: IPost[];
}

export const PostsList: FC = () => {
  const fullPost = cards[0];
  const mediumPost = cards.slice(1, 5);
  const smallPost = cards.slice(5, 11);
  return (
    <div className="list">
      <div className="list__primary">
        <div className="list__full-card">
          <Post date={fullPost.date} type="large" image={fullPost.image} title={fullPost.title} text={fullPost.text} linkPath={fullPost.image} />
        </div>
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
