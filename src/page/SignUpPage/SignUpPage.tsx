import { FC, useState } from "react";
import { Typogrphy } from "../../components/Typogrphy/Typogrphy";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import "./SignUpPage.scss";

export const SignUpPage: FC = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangeName = (newValue: string) => {
    setName(newValue);
  };
  const handleChangeEmail = (newValue: string) => {
    setemail(newValue);
  };
  const handleChangePassword = (newValue: string) => {
    setPassword(newValue);
  };
  const handleChangeConfirmPassword = (newValue: string) => {
    setConfirmPassword(newValue);
  };
  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="sign-up">
      <span className="sign-up__back">Back to home</span>
      <Typogrphy content="Sing Up" type="H1" />
      <form className="sign-up__form" action="">
        <Input title="Name" placeholder="Your Name" value={name} handleChange={handleChangeName} />
        <Input title="Email" placeholder="Your email" value={email} handleChange={handleChangeEmail} />
        <Input title="Password" placeholder="Your password" value={password} handleChange={handleChangePassword} />
        <Input title="Confirm password" placeholder="Confirm password" value={confirmPassword} handleChange={handleChangeConfirmPassword} />
        <Button content="Sign Up" onClick={handleSubmit} type="primary" />
        <p className="sign-up__form-description">
          Already have an account?{" "}
          <a className="sign-up__form-link" href="http://example.com">
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};
