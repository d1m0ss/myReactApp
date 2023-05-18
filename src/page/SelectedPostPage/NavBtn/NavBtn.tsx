import { FC } from "react";
import { IconButton } from "../../../components/IconButton/IconButton";
import "./NavBtn.scss";
import { ArrowL, ArrowR } from "../../../assets";

interface INavBtn {
  type: "Next" | "Prev";
  title: string;
}

export const NavBtn: FC<INavBtn> = ({ type, title }) => {
  const funcHolder = () => {
    console.log("butoon pressed");
  };
  return (
    <div>
      <IconButton onClick={funcHolder}>
        <div className={`selected-post__btn ${type}-post__btn`}>
          <div className="selected-post__btn-text">
            <span className="selected-post__nav">{type}</span>
            <span className="selected-post__descrybe">{title}</span>
          </div>
          {type === "Next" ? <ArrowR /> : <ArrowL />}
        </div>
      </IconButton>
    </div>
  );
};
