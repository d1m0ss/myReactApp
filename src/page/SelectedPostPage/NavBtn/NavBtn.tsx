import { FC } from "react";
import { IconButton } from "../../../components/IconButton/IconButton";
import ArrowL from "../../../assets/icon/Arrow-L.svg";
import ArrowR from "../../../assets/icon/Arrow-R.svg";
import "./NavBtn.scss";

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
          <img src={type === "Next" ? ArrowR : ArrowL} alt="arrow" />
        </div>
      </IconButton>
    </div>
  );
};
