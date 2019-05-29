export interface IAction {
  type: string;
  id?: number;
  text?: string;
  filter?: string;
}

export interface IState {
  id: number;
  text: string;
  completed: boolean;
}
