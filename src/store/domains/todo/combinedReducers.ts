import { combineReducers } from 'redux';
import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TodoActionTypes } from './actionTypes'; 
import { IState, IFilteredTodos } from './interfaces';
import { VisabilityList } from '../../../consts';

const initialState: ImmutableObject<IState> = Immutable({ 
  allIds: ['1', '2'],
  todoById: {
    '1': { id: '1', text: 'first', completed: false },
    '2': { id: '2', text: 'second', completed: false }
  }
});

const todos = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.ADD_TODO:
      return state
        .updateIn(['allIds'], val => val.concat(action.id))
        .setIn(['todoById', action.id], {
          id: action.id,
          text: action.text,
          completed: false
        });
    case ActionTypeKeys.TOGGLE_TODO:
      return state.updateIn(['todoById', action.id, 'completed'], val => !val);
    default:
      return state;
  }
};

const initialVisability: Immutable.Immutable<string> = Immutable(VisabilityList.ALL);

const visabilityFilter = (state = initialVisability, action: TodoActionTypes) => {
  return action.type === ActionTypeKeys.SET_VISABILITY_FILTER ? action.filter : state;
};

const initialFilteredTodos: ImmutableObject<IFilteredTodos> = Immutable({
  [VisabilityList.ALL]: ['1', '2'],
  [VisabilityList.ACTIVE]: ['1', '2'],
  [VisabilityList.COMPLETED]: []
});

const filteredTodos = (state = initialFilteredTodos, action: TodoActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.ADD_TODO:
      return state
        .updateIn([VisabilityList.ALL], val => val.concat(action.id))
        .updateIn([VisabilityList.ACTIVE], val => val.concat(action.id));
    case ActionTypeKeys.TOGGLE_TODO:
      if (!state.ACTIVE.includes(action.id)) {
        return state
          .updateIn([VisabilityList.ACTIVE], val => val.concat(action.id))
          .set(VisabilityList.COMPLETED, state.COMPLETED.filter(el => el !== action.id));
      }
      return state
        .updateIn([VisabilityList.COMPLETED], val => val.concat(action.id))
        .set(VisabilityList.ACTIVE, state.ACTIVE.filter(el => el !== action.id));
    default:
      return state;
  }
};

export default combineReducers({
  todos,
  visabilityFilter,
  filteredTodos
});
