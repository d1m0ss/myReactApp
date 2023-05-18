import { FC } from "react";
import "./BreadCrumbs.scss";

interface IBreadCrumbs {}

export const BreadCrumbs: FC<IBreadCrumbs> = () => {
  return (
    <div className="bread-crumbs">
      <a href="/posts">Home</a>
      <a>Post 14278</a>
    </div>
  );
};
