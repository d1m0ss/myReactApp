import { FC, useState } from "react";
import { Title } from "../../components/Title/Title";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import "./SignIn.scss";

export const SignIn: FC = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (newValue: string) => {
    setemail(newValue);
  };
  const handleChangePassword = (newValue: string) => {
    setPassword(newValue);
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="sign-in">
      <span className="sign-in__back">Back to home</span>
      <Title content="Sing In" type="H1" />
      <form className="sign-in__form" action="">
        <Input title="Email" placeholder="Your email" value={email} handleChange={handleChangeEmail} />
        <Input title="Password" placeholder="Your password" value={password} handleChange={handleChangePassword} />
        <Button content="Sign In" onClick={handleSubmit} type="primary" />
        <p className="sign-in__form-description">
          Don’t have an account?{" "}
          <a className="sign-in__form-link" href="http://example.com">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};
