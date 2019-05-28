import { ADD_TODO, SET_VISABILITY_FILTER, TOGGLE_TODO } from './actionTypes';

export const addTodo = (text: string, nextId: number) => ({
  type: ADD_TODO,
  text: text,
  id: nextId
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  id: id
});

export const filterTodo = (filter: string) => ({
  type: SET_VISABILITY_FILTER,
  filter
});
