import { VisabilityList } from '../../../consts';

export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface ITodoObj {
  [key: string]: ITodo;
}

export interface IState {
  allIds: string[];
  todoById: ITodoObj;
}

export type IFilteredTodos = { [key in VisabilityList]: string[] }
