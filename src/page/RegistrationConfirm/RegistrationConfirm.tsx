import { FC } from "react";
import { Title } from "../../components/Title/Title";
import { Button } from "../../components/Button/Button";
import "./RegistrationConfirm.scss";

export const RegistrationConfirm: FC = () => {
  const handleClickGoHome = () => {
    console.log("handleClickGoHome");
  };
  return (
    <div className="registration-confirm">
      <span className="registration-confirm__back">Back to home</span>
      <Title content="RegistrationConfirm" type="H1" />
      <div className="registration-confirm__form">
        <p className="registration-confirm__text">
          Please activate your account with the activation <br />
          link in the email <b>example@gmail.com.</b><br />
          Please, check your email
        </p>
        <Button content="Go to home" onClick={handleClickGoHome} type="primary" />
      </div>
    </div>
  );
};
