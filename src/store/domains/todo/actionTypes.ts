import { ITodoObj } from './interfaces';

export enum ActionTypeKeys {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  SET_VISABILITY_FILTER = 'SET_VISABILITY_FILTER',

  GET_TODOS = 'todos/GET_TODOS',
  GET_TODOS_FULFILLED = 'todos/GET_TODOS_FULFILLED'
}

export interface IAddTodoActionType {
  type: ActionTypeKeys.ADD_TODO;
  text: string;
  id: string;
}

export interface IToggleTodoActionType {
  type: ActionTypeKeys.TOGGLE_TODO;
  id: string;
}

export interface IFilterTodoActionType {
  type: ActionTypeKeys.SET_VISABILITY_FILTER;
  filter: string;
}

export interface IGetTodos {
  type: ActionTypeKeys.GET_TODOS;
  payload: Promise<ITodoObj>;
}

export interface IGetTodosFulfilled {
  type: ActionTypeKeys.GET_TODOS_FULFILLED;
  payload: ITodoObj;
}

export type TodoActionTypes = 
      | IAddTodoActionType 
      | IToggleTodoActionType  
      | IFilterTodoActionType
      | IGetTodos
      | IGetTodosFulfilled;
