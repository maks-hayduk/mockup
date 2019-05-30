import { ActionTypeKeys, addTodoActionType, toggleTodoActionType, filterTodoActionType } from './actionTypes';

export type addTodoAction = (text: string, nextId: string) => addTodoActionType;

export type toggleTodoAction = (id: string) => toggleTodoActionType;

export type filterTodoAction = (filter: string) => filterTodoActionType;

export const addTodo: addTodoAction = (text: string, nextId: string) => ({
  type: ActionTypeKeys.ADD_TODO,
  text: text,
  id: nextId
});

export const toggleTodo: toggleTodoAction = (id: string) => ({
  type: ActionTypeKeys.TOGGLE_TODO,
  id: id
});

export const filterTodo: filterTodoAction = (filter: string) => ({
  type: ActionTypeKeys.SET_VISABILITY_FILTER,
  filter
});
