import { combineReducers } from 'redux';
import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TodoActionTypes } from './actionTypes'; 
import { IState, ITodo } from './interfaces';
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
        .setIn(['allIds', state.allIds.length], action.id)
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

export default combineReducers({
  todos,
  visabilityFilter
});
