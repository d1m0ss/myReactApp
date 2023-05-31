import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./actionTypes";
import { IAddTodoAction, IDeleteTodoAction, IEditTodoAction } from "./interfaces";

export const addTodo = (text: string): IAddTodoAction => ({
  type: ADD_TODO,
  payload: {
    id: String(Date.now()),
    text,
  },
});

export const editTodo = (id: string, text: string): IEditTodoAction => ({
  type: EDIT_TODO,
  payload: { id, text },
});

export const deleteTodo = (id: string): IDeleteTodoAction => ({
  type: DELETE_TODO,
  payload: { id },
});
