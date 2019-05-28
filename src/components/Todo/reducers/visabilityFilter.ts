import { SET_VISABILITY_FILTER } from '../actionTypes';
import { Visability } from '../../consts';
import { IAction, IState } from '../interfaces';

export const visabilityFilter = (state: string = Visability.SHOW_ALL, action: IAction) => {
  switch (action.type) {
    case SET_VISABILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export const getVisibleTodos = (todos: IState[], filter: string) => {
  switch (filter) {
    case Visability.SHOW_ALL:
      return todos;
    case Visability.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case Visability.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};
