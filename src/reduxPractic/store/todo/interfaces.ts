import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./actionTypes";

export interface ITodoState {
  todos: ITodo[];
}

export interface ITodo {
  id: string;
  text: string;
}

export interface IAddTodoAction {
  type: typeof ADD_TODO;
  payload: ITodo;
}

export interface IEditTodoAction {
  type: typeof EDIT_TODO;
  payload: ITodo;
}

export interface IDeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: { id: string };
}

export type todoActionTypes = IAddTodoAction | IEditTodoAction | IDeleteTodoAction;
