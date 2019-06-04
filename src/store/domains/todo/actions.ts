import { ActionTypeKeys, IAddTodoActionType, IToggleTodoActionType, IFilterTodoActionType, IGetTodos } from './actionTypes';
import * as api from './api';

export type IAddTodoAction = (text: string, nextId: string) => IAddTodoActionType;

export type IToggleTodoAction = (id: string) => IToggleTodoActionType;

export type IFilterTodoAction = (filter: string) => IFilterTodoActionType;

export type IGetTodosAction = () => IGetTodos;

export const addTodo: IAddTodoAction = (text: string, nextId: string) => ({
  type: ActionTypeKeys.ADD_TODO,
  text: text,
  id: nextId
});

export const toggleTodo: IToggleTodoAction = (id: string) => ({
  type: ActionTypeKeys.TOGGLE_TODO,
  id: id
});

export const filterTodo: IFilterTodoAction = (filter: string) => ({
  type: ActionTypeKeys.SET_VISABILITY_FILTER,
  filter
});

export const getTodos: IGetTodosAction = () => ({
  type: ActionTypeKeys.GET_TODOS,
  payload: api.getTodos()
});
