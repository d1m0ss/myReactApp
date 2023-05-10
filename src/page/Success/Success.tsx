import { FC } from "react";
import { Title } from "../../components/Title/Title";
import { Button } from "../../components/Button/Button";
import "./Success.scss";

export const Success: FC = () => {
  const handleClickGoHome = () => {
    console.log("handleClickGoHome");
  };

  return (
    <div className="success">
      <span className="success__back">Back to home</span>
      <Title content="RegistrationConfirm" type="H1" />
      <div className="success__form">
        <p className="success__text">
          Email confirmed. <br />
          Your registration is now completed
        </p>
        <Button content="Go to home" onClick={handleClickGoHome} type="primary" />
      </div>
    </div>
  );
};
