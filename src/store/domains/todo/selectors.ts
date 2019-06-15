import { createSelector } from 'reselect';
import { IStateToProps } from '../../../types';
import { VisabilityList } from '../../../consts';

export const selectTodos = (state: IStateToProps) => {
  return state.todos.todoById;
};

export const selectVisabilityFilter = (state: IStateToProps) => {
  return state.visabilityFilter;
};

export const selectVisableTodos = (state: IStateToProps) => {
  return state.filteredTodos;
};

export const selectFilteredTodos = createSelector(
  selectTodos,
  selectVisableTodos,
  selectVisabilityFilter,
  (todos, visableTodos, filter) => {
    switch (filter) {
      case VisabilityList.ALL:{
        return visableTodos[filter].map(id => todos[id]);
      }
      case VisabilityList.ACTIVE:
        return visableTodos[filter].map(id => todos[id]);
      case VisabilityList.COMPLETED:
        return visableTodos[filter].map(id => todos[id]);
      default:
        return visableTodos.ALL.map(id => todos[id]);
    }
  }
);
