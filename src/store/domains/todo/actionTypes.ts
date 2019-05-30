export enum ActionTypeKeys {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  SET_VISABILITY_FILTER = 'SET_VISABILITY_FILTER'
}

export interface addTodoActionType {
  type: ActionTypeKeys.ADD_TODO;
  text: string;
  id: string;
}

export interface toggleTodoActionType {
  type: ActionTypeKeys.TOGGLE_TODO;
  id: string
}

export interface filterTodoActionType {
  type: ActionTypeKeys.SET_VISABILITY_FILTER;
  filter: string
}

export type TodoActionTypes = addTodoActionType | toggleTodoActionType | filterTodoActionType;
