import { combineReducers } from 'redux';
import Immutable, { ImmutableArray } from 'seamless-immutable';

import { ADD_TODO, TOGGLE_TODO, SET_VISABILITY_FILTER } from './actionTypes'; 
import { IState, IAction } from './interfaces';
import { VisabilityList } from '../../../consts';

const initialState: ImmutableArray<IState> = Immutable([]);

interface ITodoAction {
  type: string;
  id: number;
  text: string;
  completed: boolean;
}

const todos = (state = initialState, action: ITodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([{
        id: action.id,
        text: action.text,
        completed: false
      }]);
    case TOGGLE_TODO:
      return state.map(todo => {
        return todo.id !== action.id ? todo : { ...todo, completed: !todo.completed };
      });
    default:
      return state;
  }
};

const initialVisability: Immutable.Immutable<string> = Immutable(VisabilityList.ALL);

const visabilityFilter = (state = initialVisability, action: IAction) => {
  return action.type === SET_VISABILITY_FILTER ? action.filter : state;
};

export default combineReducers({
  todos,
  visabilityFilter
});
