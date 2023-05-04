import "./App.scss";
import { Title } from "./components/Title/Title";
import { Button } from "./components/Button/Button";
import { UserInfo } from "./components/UserInfo/UserInfo";
import { HamburgerBtn } from "./components/HamburgerBtn/HamburgerBtn";
import { Tabs } from "./components/Tabs/Tabs";

export const App = () => {
  const handleClick = () => {
    console.log(1);
  };

  return (
    <div className="app">
      <Title type="H1" content="Sign In" />
      <Title type="H2" content="Sign In" />
      <Title type="H3" content="Sign In" />
      <Title type="subline" content="Sign In" />
      <Title type="primary" content="Sign In" />
      <Title type="secondary" content="Sign In" />
      <br />
      <br />
      <Button content="Primary" type="primary" isDisabled={false} callback={handleClick} />
      <Button content="Primary" type="primary" isDisabled callback={handleClick} />
      <br />
      <br />
      <Button content="Secondary" type="secondary" isDisabled={false} callback={handleClick} />
      <Button content="Secondary" type="secondary" isDisabled callback={handleClick} />
      <br />
      <br />
      <Button content="Secondary 2" type="secondary2" isDisabled={false} callback={handleClick} />
      <Button content="Secondary 2" type="secondary2" isDisabled callback={handleClick} />
      <br />
      <br />
      <HamburgerBtn />
      <UserInfo userName="Volkov Dmitriy" />
      <br />
      <br />
      <Tabs />
    </div>
  );
};
