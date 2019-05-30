export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface IState {
  allIds: string[];
  todoById: Map<string, ITodo>;
}
