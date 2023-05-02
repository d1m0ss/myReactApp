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
      <Title content="Sign In" />
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
      <UserInfo userName="Volkov Dmitriy" />
      <br />
      <br />
      <HamburgerBtn />
      <br />
      <br />
      <Tabs content="All My-favorites Popular"/>
    </div>
  );
};
