import { FC } from "react";
import "./UserInfo.scss";

interface IUserInfo {
  userName: string;
}

export const UserInfo: FC<IUserInfo> = ({ userName }) => {
  const getInitials = (userName: string) =>
    userName
      .toUpperCase()
      .split(" ")
      .map((word) => word[0]);

  return (
    <div className="user-info">
      <div className="user-info__initials">{getInitials(userName)}</div>
      <div className="user-info__name">{userName}</div>
    </div>
  );
};
