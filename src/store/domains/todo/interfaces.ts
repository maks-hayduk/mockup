export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

interface ITodoObj {
  [key: string]: ITodo;
}

export interface IState {
  allIds: string[];
  todoById: ITodoObj;
}

export interface IFilteredTodos {
  ALL: string[];
  ACTIVE: string[];
  COMPLETED: string[];
}
