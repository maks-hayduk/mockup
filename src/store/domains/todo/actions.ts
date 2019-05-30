import { ActionTypeKeys } from './actionTypes';

export const addTodo = (text: string, nextId: string) => ({
  type: ActionTypeKeys.ADD_TODO,
  text: text,
  id: nextId
});

export const toggleTodo = (id: string) => ({
  type: ActionTypeKeys.TOGGLE_TODO,
  id: id
});

export const filterTodo = (filter: string) => ({
  type: ActionTypeKeys.SET_VISABILITY_FILTER,
  filter
});
