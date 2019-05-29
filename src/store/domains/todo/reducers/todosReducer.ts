import Immutable, { ImmutableArray } from 'seamless-immutable';
import { ADD_TODO, TOGGLE_TODO } from '../actionTypes'; 
import { IState } from '../interfaces';

const initialState: ImmutableArray<IState> = Immutable([]);

interface IAction {
  type: string;
  id: number;
  text: string;
  completed: boolean;
}

const todos = (state = initialState, action: IAction) => {
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

export default todos;
