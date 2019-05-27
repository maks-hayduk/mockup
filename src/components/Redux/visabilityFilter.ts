import { SET_VISABILITY_FILTER, SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from './actionTypes';
import { IAction, IState } from './interfaces';

export const visabilityFilter = (state: string = SHOW_ALL, action: IAction) => {
  switch (action.type) {
    case SET_VISABILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export const getVisibleTodos = (todos: IState[], filter: string) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};
