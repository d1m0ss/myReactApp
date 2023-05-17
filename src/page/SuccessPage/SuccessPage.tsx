import { FC } from "react";
import { Typogrphy } from "../../components/Typogrphy/Typogrphy";
import { Button } from "../../components/Button/Button";
import "./SuccessPage.scss";

export const SuccessPage: FC = () => {
  const handleClickGoHome = () => {
    console.log("handleClickGoHome");
  };

  return (
    <div className="success">
      <span className="success__back">Back to home</span>
      <Typogrphy content="RegistrationConfirm" type="H1" />
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
