import { FC, useState } from "react";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import "./Form.scss";

export const Form: FC = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [text, setText] = useState("");

  const handleChangeName = (newName: string) => {
    setName(newName);
  };

  const handleChangeLastName = (newName: string) => {
    setLastName(newName);
  };

  const handleChangeEmail = (newName: string) => {
    setemail(newName);
  };

  const handleChangeLastText = (newName: string) => {
    setText(newName);
  };

  return (
    <form>
      <Input
        title="Title name"
        placeholder="some placeholder"
        value={name}
        handleChange={handleChangeName}
      />
      <Input
        title="Title last name"
        placeholder="some placeholder"
        value={lastName}
        handleChange={handleChangeLastName}
      />
      <Input
        title="Title Email"
        placeholder="some placeholder"
        value={email}
        handleChange={handleChangeEmail}
        errorMessage="Не введен Email"
      />
      <Textarea title="Title" placeholder="some placeholder" value={text} handleChange={handleChangeLastText}/>
    </form>
  );
};
