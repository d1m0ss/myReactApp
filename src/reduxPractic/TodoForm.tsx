import { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todo/actions";

export const TodoForm: FC = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length !== 0) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmin}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button>Add</button>
    </form>
  );
};
