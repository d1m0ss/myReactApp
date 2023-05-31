import {} from "./actionTypes";
import { ITodoState, todoActionTypes } from "./interfaces";

const initialState: ITodoState = {
  todos: [],
};

export const todo = (state: ITodoState = initialState, { payload, type }: todoActionTypes): ITodoState => {
  switch (type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, payload] };
    case "EDIT_TODO":
      return { ...state, todos: state.todos.map((todo) => (todo.id === payload.id ? { ...todo, text: payload.text } : todo)) };
    case "DELETE_TODO":
      return { ...state, todos: state.todos.filter((todo) => todo.id !== payload.id) };
    default:
      return state;
  }
};
