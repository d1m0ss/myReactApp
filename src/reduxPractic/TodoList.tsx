import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { TodoItem } from "./TodoItem";
import { TodoForm } from "./TodoForm";

export const TodoList: FC = () => {
  const { todos } = useSelector((state: RootState) => state.todo);
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
