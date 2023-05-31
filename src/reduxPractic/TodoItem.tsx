import { FC, useState } from "react";
import { ITodo } from "./store/todo/interfaces";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "./store/todo/actions";

interface ITodoItem {
  todo: ITodo;
}

export const TodoItem: FC<ITodoItem> = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    dispatch(editTodo(todo.id, text));
    setIsEditing(false);
  };
  const handleDelite = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelite}>Delete</button>
        </>
      )}
    </div>
  );
};
